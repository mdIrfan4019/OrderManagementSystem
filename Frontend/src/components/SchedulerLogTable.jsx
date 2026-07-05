const SchedulerLogTable = ({ logs }) => {

    return (

        <div className="overflow-x-auto bg-white rounded-xl shadow">

            <table className="min-w-full">

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="px-5 py-3 text-left">
                            Execution Time
                        </th>

                        <th className="px-5 py-3 text-left">
                            Orders Checked
                        </th>

                        <th className="px-5 py-3 text-left">
                            Orders Updated
                        </th>

                        <th className="px-5 py-3 text-left">
                            Status
                        </th>

                        <th className="px-5 py-3 text-left">
                            Message
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {logs.map((log) => (

                        <tr
                            key={log._id}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="px-5 py-3">

                                {new Date(log.executionTime).toLocaleString()}

                            </td>

                            <td className="px-5 py-3">

                                {log.ordersChecked}

                            </td>

                            <td className="px-5 py-3">

                                {log.ordersUpdated}

                            </td>

                            <td className="px-5 py-3">

                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        log.status === "SUCCESS"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {log.status}
                                </span>

                            </td>

                            <td className="px-5 py-3">

                                {log.message}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default SchedulerLogTable;