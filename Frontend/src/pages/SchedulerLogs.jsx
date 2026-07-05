import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SchedulerLogTable from "../components/SchedulerLogTable";
import SchedulerStatusFilter from "../components/SchedulerStatusFilter";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

import { getSchedulerLogs } from "../services/schedulerService";

const SchedulerLogs = () => {

    const [logs, setLogs] = useState([]);
    const [pagination, setPagination] = useState({});

    const [page, setPage] = useState(1);
    const [limit] = useState(10);

    const [status, setStatus] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchSchedulerLogs = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await getSchedulerLogs({
                page,
                limit,
                status,
            });

            setLogs(response.logs);
            setPagination(response.pagination);

        } catch (error) {

            console.error(error);

            setError("Failed to fetch scheduler logs.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchSchedulerLogs();

    }, [page, status]);

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h1 className="text-3xl font-bold">
                            Scheduler Logs
                        </h1>

                        <button
                            onClick={fetchSchedulerLogs}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                        >
                            Refresh
                        </button>

                    </div>

                    <div className="mb-6">

                        <SchedulerStatusFilter
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                setPage(1);
                            }}
                        />

                    </div>

                    {loading && <Loading />}

                    {!loading && error && (

                        <div className="text-center text-red-500 font-semibold">

                            {error}

                        </div>

                    )}

                    {!loading && !error && logs.length === 0 && (

                        <EmptyState />

                    )}

                    {!loading && !error && logs.length > 0 && (

                        <>

                            <SchedulerLogTable
                                logs={logs}
                            />

                            <div className="mt-6">

                                <Pagination
                                    pagination={pagination}
                                    onPageChange={setPage}
                                />

                            </div>

                        </>

                    )}

                </main>

            </div>

        </div>

    );

};

export default SchedulerLogs;