import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderService";

const OrderForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        productName: "",
        amount: "",
        paymentStatus: "PENDING",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccess("");
        setError("");

        if (
            !formData.customerName ||
            !formData.phone ||
            !formData.productName ||
            !formData.amount
        ) {

            setError("Please fill all required fields.");

            return;
        }

        try {

            setLoading(true);

            await createOrder({
                ...formData,
                amount: Number(formData.amount),
            });

            setSuccess("Order created successfully.");

            setFormData({
                customerName: "",
                phone: "",
                productName: "",
                amount: "",
                paymentStatus: "PENDING",
            });

            setTimeout(() => {
                navigate("/orders");
            }, 1500);

        } catch (err) {

            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Failed to create order."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8">

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <div>

                    <label className="block mb-2 font-medium">
                        Customer Name
                    </label>

                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Enter customer name"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Phone Number
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Product Name
                    </label>

                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Amount
                    </label>

                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Enter amount"
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Payment Status
                    </label>

                    <select
                        name="paymentStatus"
                        value={formData.paymentStatus}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    >

                        <option value="PENDING">
                            Pending
                        </option>

                        <option value="PAID">
                            Paid
                        </option>

                        <option value="FAILED">
                            Failed
                        </option>

                    </select>

                </div>

                {success && (

                    <div className="bg-green-100 text-green-700 rounded-lg p-3">

                        {success}

                    </div>

                )}

                {error && (

                    <div className="bg-red-100 text-red-700 rounded-lg p-3">

                        {error}

                    </div>

                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-60"
                >

                    {loading
                        ? "Creating Order..."
                        : "Create Order"}

                </button>

            </form>

        </div>

    );

};

export default OrderForm;