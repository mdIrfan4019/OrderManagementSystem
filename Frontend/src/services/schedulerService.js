import api from "./api";

export const getSchedulerLogs = async ({
    page = 1,
    limit = 10,
    status = "",
}) => {

    const response = await api.get("/scheduler/logs", {
        params: {
            page,
            limit,
            status,
        },
    });

    return response.data.data;

};