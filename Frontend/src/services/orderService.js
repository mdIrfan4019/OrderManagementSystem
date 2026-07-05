import api from "./api";

export const getOrders = async ({
    page = 1,
    limit = 10,
    status = "",
    search = "",
}) => {

    const response = await api.get("/orders", {
        params: {
            page,
            limit,
            status,
            search,
        },
    });

    return response.data.data;
};

export const createOrder = async (orderData) => {

    const response = await api.post(
        "/orders",
        orderData
    );

    return response.data;

};