import Order from "../models/Order.js";
import SchedulerLog from "../models/SchedulerLog.js";
import ApiError from "../utils/ApiError.js";

export const runScheduler = async () => {
    try {
        const now = new Date();

        let ordersChecked = 0;
        let ordersUpdated = 0;

        // Fetch all orders that can be processed
        const orders = await Order.find({
            orderStatus: {
                $in: ["PLACED", "PROCESSING"],
            },
        });

        ordersChecked = orders.length;

        for (const order of orders) {

            let nextStatus = null;

            // Minutes since last update
            const elapsedMinutes =
                (now - order.updatedAt) / (1000 * 60);

            if (
                order.orderStatus === "PLACED" &&
                elapsedMinutes >= 10
            ) {
                nextStatus = "PROCESSING";
            }

            else if (
                order.orderStatus === "PROCESSING" &&
                elapsedMinutes >= 20
            ) {
                nextStatus = "READY_TO_SHIP";
            }

            if (!nextStatus) continue;

            // Atomic update (avoids race condition)
            const updatedOrder = await Order.findOneAndUpdate(
                {
                    _id: order._id,
                    orderStatus: order.orderStatus,
                },
                {
                    $set: {
                        orderStatus: nextStatus,
                    },
                    $push: {
                        statusHistory: {
                            status: nextStatus,
                            updatedAt: now,
                        },
                    },
                },
                {
                    new: true,
                }
            );

            if (updatedOrder) {
                ordersUpdated++;
            }
        }

        // Save scheduler execution log
        await SchedulerLog.create({
            executionTime: now,
            ordersChecked,
            ordersUpdated,
            status: "SUCCESS",
            message: "Scheduler executed successfully.",
        });

        return {
            ordersChecked,
            ordersUpdated,
        };

    } catch (error) {

        await SchedulerLog.create({
            executionTime: new Date(),
            status: "FAILED",
            message: error.message,
        });

        throw new ApiError(
            500,
            "Scheduler execution failed."
        );
    }
};

export const getSchedulerLogs = async (query) => {

    let {
        page = 1,
        limit = 10,
        status,
    } = query;

    page = Number(page);
    limit = Number(limit);

    const filter = {};

    if (status) {
        filter.status = status;
    }

    const totalLogs = await SchedulerLog.countDocuments(filter);

    const logs = await SchedulerLog.find(filter)
        .sort({ executionTime: -1 })
        .skip((page - 1) * limit)
        .limit(limit);

    return {

        logs,

        pagination: {

            currentPage: page,

            totalPages: Math.ceil(totalLogs / limit),

            totalLogs,

            limit,

            hasNextPage: page * limit < totalLogs,

            hasPreviousPage: page > 1,

        },

    };

};