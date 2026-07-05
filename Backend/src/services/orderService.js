import Order from "../models/Order.js";
import generateOrderId from "../utils/generateOrderId.js";

export const createOrder = async (orderData) => {

    const {
        customerName,
        phone,
        productName,
        amount,
    } = orderData;

    // Basic Validation
    if (!customerName || !phone || !productName || !amount) {
        throw new Error("All fields are required.");
    }

    const order = await Order.create({
        orderId: generateOrderId(),
        customerName,
        phone,
        productName,
        amount,
    });

    return order;
};


export const getOrders = async (query) => {

    let {
        page = 1,
        limit = 10,
        status,
        search,
        sort = "desc",
    } = query;

    page = Number(page);
    limit = Number(limit);

    const filter = {};

    if (status) {
        filter.orderStatus = status;
    }

    if (search) {
        filter.$or = [
            {
                orderId: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                customerName: {
                    $regex: search,
                    $options: "i",
                },
            },
        ];
    }

    const totalOrders = await Order.countDocuments(filter);

    const orders = await Order.find(filter)
        .sort({
            createdAt: sort === "asc" ? 1 : -1,
        })
        .skip((page - 1) * limit)
        .limit(limit);

    return {

        data: orders,

        pagination: {

            currentPage: page,

            totalPages: Math.ceil(totalOrders / limit),

            totalOrders,

            limit,

            hasNextPage: page * limit < totalOrders,

            hasPreviousPage: page > 1,
        },
    };
};


export const getOrderById = async (orderId) => {

    if (!orderId) {
        throw new ApiError(
            400,
            "Order ID is required."
        );
    }

    const order = await Order.findOne({ orderId });

    if (!order) {
        throw new ApiError(
            404,
            "Order not found."
        );
    }

    return order;
};

export const updateOrder = async (orderId, updateData) => {

    if (!orderId) {
        throw new ApiError(
            400,
            "Order ID is required."
        );
    }

    const allowedFields = [
        "customerName",
        "phone",
        "productName",
        "amount",
        "paymentStatus",
    ];

    const updates = {};

    Object.keys(updateData).forEach((key) => {
        if (allowedFields.includes(key)) {
            updates[key] = updateData[key];
        }
    });

    if (Object.keys(updates).length === 0) {
        throw new ApiError(
            400,
            "No valid fields provided for update."
        );
    }

    const updatedOrder = await Order.findOneAndUpdate(
        { orderId },
        updates,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!updatedOrder) {
        throw new ApiError(
            404,
            "Order not found."
        );
    }

    return updatedOrder;
};


export const deleteOrder = async (orderId) => {

    if (!orderId) {
        throw new ApiError(
            400,
            "Order ID is required."
        );
    }

    const deletedOrder = await Order.findOneAndDelete({
        orderId,
    });

    if (!deletedOrder) {
        throw new ApiError(
            404,
            "Order not found."
        );
    }

    return deletedOrder;
};