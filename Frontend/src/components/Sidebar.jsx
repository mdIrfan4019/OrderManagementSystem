// import { FaClipboardList, FaChartBar, FaClock } from "react-icons/fa";

// const Sidebar = () => {
//     return (
//         <aside className="w-64 bg-white shadow min-h-screen">

//             <div className="p-6">

//                 <ul className="space-y-4">

//                     <li className="flex items-center gap-3 cursor-pointer text-blue-600 font-semibold">
//                         <FaChartBar />
//                         Dashboard
//                     </li>

//                     <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
//                         <FaClipboardList />
//                         Orders
//                     </li>

//                     <li className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
//                         <FaClock />
//                         Scheduler Logs
//                     </li>

//                 </ul>

//             </div>

//         </aside>
//     );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import {
    FaChartBar,
    FaClipboardList,
    FaClock,
    FaPlusCircle,
} from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white shadow min-h-screen">
            <div className="p-6">
                <ul className="space-y-4">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaChartBar />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/orders"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaClipboardList />
                        Orders
                    </NavLink>
                    <NavLink
    to="/create-order"
    className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded ${
            isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
        }`
    }
>
    <FaPlusCircle />
    Create Order
</NavLink>

                    <NavLink
                        to="/scheduler-logs"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-2 rounded ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-100"
                            }`
                        }
                    >
                        <FaClock />
                        Scheduler Logs
                    </NavLink>

                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;