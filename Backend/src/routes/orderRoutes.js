import express from "express";
import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
} from "../controllers/orderController.js";


const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.get("/:orderId", getOrderById);

router.patch("/:orderId", updateOrder);
router.delete("/:orderId", deleteOrder);

export default router;