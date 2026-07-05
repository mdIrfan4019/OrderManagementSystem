import ApiError from "../utils/ApiError.js";

const schedulerAuth = (req, res, next) => {
    const schedulerSecret = req.headers["x-scheduler-secret"];

    if (!schedulerSecret) {
        return next(
            new ApiError(
                401,
                "Scheduler secret key is missing."
            )
        );
    }

    if (schedulerSecret !== process.env.SCHEDULER_SECRET) {
        return next(
            new ApiError(
                401,
                "Invalid scheduler secret key."
            )
        );
    }

    next();
};

export default schedulerAuth;