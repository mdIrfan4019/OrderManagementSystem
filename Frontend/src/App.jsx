import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import SchedulerLogs from "./pages/SchedulerLogs";
import CreateOrder from "./pages/CreateOrder";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />
      <Route
        path="/create-order"
        element={<CreateOrder />}
      />

      <Route
        path="/scheduler-logs"
        element={<SchedulerLogs />}
      />

    </Routes>

  );

}

export default App;