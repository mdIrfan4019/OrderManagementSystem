import mongoose from "mongoose";

const statusHistorySchema = new mongoose.Schema(
    {
        status: {
            type: String,
            enum: ["PLACED", "PROCESSING", "READY_TO_SHIP"],
            required: true,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        _id: false,
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        customerName: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        productName: {
            type: String,
            required: true,
            trim: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 1,
        },

        paymentStatus: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED"],
            default: "PENDING",
        },

        orderStatus: {
            type: String,
            enum: ["PLACED", "PROCESSING", "READY_TO_SHIP"],
            default: "PLACED",
        },

        statusHistory: {
            type: [statusHistorySchema],
            default: [
                {
                    status: "PLACED",
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;