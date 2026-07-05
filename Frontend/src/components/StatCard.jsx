const StatCard = ({ title, value, color }) => {
    return (
        <div className={`${color} text-white rounded-xl shadow-lg p-6`}>

            <h3 className="text-lg font-medium">
                {title}
            </h3>

            <h2 className="text-4xl font-bold mt-3">
                {value}
            </h2>

        </div>
    );
};

export default StatCard;