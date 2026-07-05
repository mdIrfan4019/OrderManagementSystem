import mongoose from "mongoose";

const schedulerLogSchema = new mongoose.Schema(
    {
        executionTime: {
            type: Date,
            default: Date.now,
        },

        ordersChecked: {
            type: Number,
            default: 0,
        },

        ordersUpdated: {
            type: Number,
            default: 0,
        },

        status: {
            type: String,
            enum: ["SUCCESS", "FAILED"],
            required: true,
        },

        message: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const SchedulerLog = mongoose.model(
    "SchedulerLog",
    schedulerLogSchema
);

export default SchedulerLog;