import express from "express";
import {
    runScheduler,
    getSchedulerLogs,
} from "../controllers/schedulerController.js";

import schedulerAuth from "../middlewares/schedulerAuthMiddleware.js";

const router = express.Router();

// Protected endpoint (used by cron job)
router.post(
    "/run",
    schedulerAuth,
    runScheduler
);

// Public endpoint (used by dashboard)
router.get(
    "/logs",
    getSchedulerLogs
);

export default router;