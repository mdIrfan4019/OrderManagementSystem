import { FaBoxOpen } from "react-icons/fa";

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">

            <FaBoxOpen size={70} className="mb-4 text-gray-400" />

            <h2 className="text-2xl font-semibold">
                No Orders Found
            </h2>

            <p className="mt-2">
                There are no orders matching your search.
            </p>

        </div>
    );
};

export default EmptyState;