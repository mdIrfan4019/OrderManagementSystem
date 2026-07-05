const SchedulerStatusFilter = ({ value, onChange }) => {

    return (

        <select
            value={value}
            onChange={onChange}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >

            <option value="">
                All Status
            </option>

            <option value="SUCCESS">
                SUCCESS
            </option>

            <option value="FAILED">
                FAILED
            </option>

        </select>

    );

};

export default SchedulerStatusFilter;