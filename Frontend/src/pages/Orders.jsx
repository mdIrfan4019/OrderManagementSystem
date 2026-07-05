import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderTable from "../components/OrderTable";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";

import { getOrders } from "../services/orderService";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [pagination, setPagination] = useState({});

    const [page, setPage] = useState(1);
    const [limit] = useState(10);

    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchOrders = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await getOrders({
                page,
                limit,
                status,
                search,
            });

            setOrders(response.data);
setPagination(response.pagination);

        } catch (error) {

            console.error(error);

            setError("Failed to fetch orders.");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchOrders();

    }, [page, status, search]);

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-6">

                    {/* Header */}

                    <div className="flex justify-between items-center mb-6">

                        <h1 className="text-3xl font-bold">
                            Orders Management
                        </h1>

                        <button
                            onClick={fetchOrders}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                        >
                            Refresh
                        </button>

                    </div>

                    {/* Search & Filter */}

                    <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">

                        <SearchBar
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                        />

                        <StatusFilter
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                setPage(1);
                            }}
                        />

                    </div>

                    {/* Loading */}

                    {loading && <Loading />}

                    {/* Error */}

                    {!loading && error && (

                        <div className="text-center text-red-500 font-semibold">

                            {error}

                        </div>

                    )}

                    {/* Empty State */}

                    {!loading && !error && orders.length === 0 && (

                        <EmptyState />

                    )}

                    {/* Orders Table */}

                    {!loading && !error && orders.length > 0 && (

                        <>
                            <OrderTable orders={orders} />

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

export default Orders;