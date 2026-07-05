import Order from "../models/Order.js";

export const getDashboardStats = async () => {

    const stats = await Order.aggregate([

        {
            $group: {
                _id: null,

                totalOrders: {
                    $sum: 1
                },

                placedOrders: {
                    $sum: {
                        $cond: [
                            { $eq: ["$orderStatus", "PLACED"] },
                            1,
                            0
                        ]
                    }
                },

                processingOrders: {
                    $sum: {
                        $cond: [
                            { $eq: ["$orderStatus", "PROCESSING"] },
                            1,
                            0
                        ]
                    }
                },

                readyToShipOrders: {
                    $sum: {
                        $cond: [
                            { $eq: ["$orderStatus", "READY_TO_SHIP"] },
                            1,
                            0
                        ]
                    }
                },

                pendingPayments: {
                    $sum: {
                        $cond: [
                            { $eq: ["$paymentStatus", "PENDING"] },
                            1,
                            0
                        ]
                    }
                },

                paidOrders: {
                    $sum: {
                        $cond: [
                            { $eq: ["$paymentStatus", "PAID"] },
                            1,
                            0
                        ]
                    }
                },

                failedPayments: {
                    $sum: {
                        $cond: [
                            { $eq: ["$paymentStatus", "FAILED"] },
                            1,
                            0
                        ]
                    }
                },

                totalRevenue: {
                    $sum: "$amount"
                }

            }
        }

    ]);

    return stats[0] || {
        totalOrders: 0,
        placedOrders: 0,
        processingOrders: 0,
        readyToShipOrders: 0,
        pendingPayments: 0,
        paidOrders: 0,
        failedPayments: 0,
        totalRevenue: 0
    };

};