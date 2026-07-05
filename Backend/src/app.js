import express from "express";
import cors from "cors";
import morgan from "morgan";
import orderRoutes from "./routes/orderRoutes.js";
import { apiLimiter } from "./middlewares/rateLimiterMiddleware.js";
import notFound from "./middlewares/notFoundMiddleware.js"; 
import errorHandler from "./middlewares/errorMiddleware.js";
import schedulerRoutes from "./routes/schedulerRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Order Management API is running successfully 🚀",
    });
});
app.use("/api", apiLimiter);
app.use("/api/orders", orderRoutes);
app.use("/api/scheduler", schedulerRoutes);
app.use("/api/dashboard", dashboardRoutes);




app.use(notFound);
app.use(errorHandler);
export default app;