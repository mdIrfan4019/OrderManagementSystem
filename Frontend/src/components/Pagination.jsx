const Pagination = ({ pagination, onPageChange }) => {

    const {
        currentPage,
        totalPages,
        hasNextPage,
        hasPreviousPage,
    } = pagination;

    return (
        <div className="flex justify-between items-center">

            <button
                disabled={!hasPreviousPage}
                onClick={() => onPageChange(currentPage - 1)}
                className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
            >
                Previous
            </button>

            <span className="font-medium">
                Page {currentPage} of {totalPages}
            </span>

            <button
                disabled={!hasNextPage}
                onClick={() => onPageChange(currentPage + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;