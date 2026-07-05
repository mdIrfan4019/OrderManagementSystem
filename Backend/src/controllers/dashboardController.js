import asyncHandler from "../middlewares/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import * as dashboardService from "../services/dashboardService.js";

export const getDashboardStats = asyncHandler(async (req, res) => {

    const stats = await dashboardService.getDashboardStats();

    return res.status(200).json(
        new ApiResponse(
            200,
            "Dashboard statistics fetched successfully.",
            stats
        )
    );

});