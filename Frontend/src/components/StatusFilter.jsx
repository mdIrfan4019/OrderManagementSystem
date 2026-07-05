const StatusFilter = ({ value, onChange }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

            <option value="">
                All Status
            </option>

            <option value="PLACED">
                Placed
            </option>

            <option value="PROCESSING">
                Processing
            </option>

            <option value="READY_TO_SHIP">
                Ready To Ship
            </option>

        </select>
    );
};

export default StatusFilter;