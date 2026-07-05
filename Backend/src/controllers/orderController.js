import asyncHandler from "../middlewares/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import * as orderService from "../services/orderService.js";

export const createOrder = asyncHandler(async (req, res) => {
    const order = await orderService.createOrder(req.body);

    return res.status(201).json(
        new ApiResponse(
            201,
            "Order created successfully.",
            order
        )
    );
});

export const getOrders = asyncHandler(async (req, res) => {
    const orders = await orderService.getOrders(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Orders fetched successfully.",
            orders
        )
    );
});

export const getOrderById = asyncHandler(async (req, res) => {

    const { orderId } = req.params;

    const order = await orderService.getOrderById(orderId);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Order fetched successfully.",
            order
        )
    );

});

export const updateOrder = asyncHandler(async (req, res) => {

    const { orderId } = req.params;

    const updatedOrder = await orderService.updateOrder(
        orderId,
        req.body
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            "Order updated successfully.",
            updatedOrder
        )
    );

});

export const deleteOrder = asyncHandler(async (req, res) => {

    const { orderId } = req.params;

    const deletedOrder = await orderService.deleteOrder(orderId);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Order deleted successfully.",
            deletedOrder
        )
    );

});