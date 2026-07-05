import asyncHandler from "../middlewares/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import * as schedulerService from "../services/schedulerService.js";

export const runScheduler = asyncHandler(async (req, res) => {

    const result = await schedulerService.runScheduler();

    return res.status(200).json(
        new ApiResponse(
            200,
            "Scheduler executed successfully.",
            result
        )
    );

});




export const getSchedulerLogs = asyncHandler(async (req, res) => {

    const logs = await schedulerService.getSchedulerLogs(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Scheduler logs fetched successfully.",
            logs
        )
    );

});


