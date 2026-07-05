const OrderTable = ({ orders }) => {

    return (

        <div className="overflow-x-auto bg-white rounded-xl shadow">

            <table className="min-w-full">

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="px-5 py-3 text-left">Order ID</th>

                        <th className="px-5 py-3 text-left">Customer</th>

                        <th className="px-5 py-3 text-left">Phone</th>

                        <th className="px-5 py-3 text-left">Product</th>

                        <th className="px-5 py-3 text-left">Amount</th>

                        <th className="px-5 py-3 text-left">Payment</th>

                        <th className="px-5 py-3 text-left">Status</th>

                        <th className="px-5 py-3 text-left">Created</th>

                    </tr>

                </thead>

                <tbody>

                    {orders.map((order) => (

                        <tr
                            key={order._id}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="px-5 py-3">
                                {order.orderId}
                            </td>

                            <td className="px-5 py-3">
                                {order.customerName}
                            </td>

                            <td className="px-5 py-3">
                                {order.phone}
                            </td>

                            <td className="px-5 py-3">
                                {order.productName}
                            </td>

                            <td className="px-5 py-3">
                                ₹{order.amount}
                            </td>

                            <td className="px-5 py-3">

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium
                                        ${
                                            order.paymentStatus === "PAID"
                                                ? "bg-green-100 text-green-700"
                                                : order.paymentStatus === "FAILED"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {order.paymentStatus}
                                </span>

                            </td>

                            <td className="px-5 py-3">

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium
                                        ${
                                            order.orderStatus === "READY_TO_SHIP"
                                                ? "bg-green-100 text-green-700"
                                                : order.orderStatus === "PROCESSING"
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-blue-100 text-blue-700"
                                        }`}
                                >
                                    {order.orderStatus}
                                </span>

                            </td>

                            <td className="px-5 py-3">
                                {new Date(order.createdAt).toLocaleString()}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default OrderTable;