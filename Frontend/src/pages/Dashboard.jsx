import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import { getDashboardStats } from "../services/dashboardService";

const Dashboard = () => {

    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchDashboardStats();

    }, []);

    const fetchDashboardStats = async () => {

        try {

            setLoading(true);

            const data = await getDashboardStats();

            setStats(data);

        } catch (error) {

            setError("Failed to load dashboard statistics.");

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <h2 className="text-center mt-20 text-xl">
                Loading Dashboard...
            </h2>
        );

    }

    if (error) {

        return (
            <h2 className="text-center mt-20 text-red-500">
                {error}
            </h2>
        );

    }

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h1 className="text-3xl font-bold">
                            Dashboard Overview
                        </h1>

                        <button
                            onClick={fetchDashboardStats}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Refresh
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <StatCard
                            title="Total Orders"
                            value={stats.totalOrders}
                            color="bg-blue-500"
                        />

                        <StatCard
                            title="Placed Orders"
                            value={stats.placedOrders}
                            color="bg-yellow-500"
                        />

                        <StatCard
                            title="Processing"
                            value={stats.processingOrders}
                            color="bg-purple-500"
                        />

                        <StatCard
                            title="Ready To Ship"
                            value={stats.readyToShipOrders}
                            color="bg-green-500"
                        />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

                        <StatCard
                            title="Pending Payments"
                            value={stats.pendingPayments}
                            color="bg-orange-500"
                        />

                        <StatCard
                            title="Paid Orders"
                            value={stats.paidOrders}
                            color="bg-emerald-600"
                        />

                        <StatCard
                            title="Failed Payments"
                            value={stats.failedPayments}
                            color="bg-red-500"
                        />

                        <StatCard
                            title="Total Revenue"
                            value={`₹${stats.totalRevenue}`}
                            color="bg-indigo-600"
                        />

                    </div>

                </main>

            </div>

        </div>

    );

};

export default Dashboard;