import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";
import startOrderStatusCron from "./cron/orderStatusCron.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {

        await connectDB();

        // Start Cron Job
        startOrderStatusCron();

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error("Server startup failed:", error.message);
        process.exit(1);

    }
};

startServer();