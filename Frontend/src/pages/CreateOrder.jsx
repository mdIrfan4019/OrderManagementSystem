import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderForm from "../components/OrderForm";

const CreateOrder = () => {

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="flex">

                <Sidebar />

                <main className="flex-1 p-8">

                    <h1 className="text-3xl font-bold mb-8">
                        Create New Order
                    </h1>

                    <OrderForm />

                </main>

            </div>

        </div>

    );

};

export default CreateOrder;