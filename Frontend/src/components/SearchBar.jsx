import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative w-full md:w-96">

            <FaSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search by Order ID or Customer..."
                value={value}
                onChange={onChange}
                className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    );
};

export default SearchBar;