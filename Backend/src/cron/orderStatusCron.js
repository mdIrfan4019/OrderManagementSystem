import cron from "node-cron";
import { runScheduler } from "../services/schedulerService.js";

const startOrderStatusCron = () => {
    cron.schedule("*/5 * * * *", async () => {
        try {
            await runScheduler();
        } catch (error) {
            console.error("Scheduler Error:", error.message);
        }
    });
};

export default startOrderStatusCron;