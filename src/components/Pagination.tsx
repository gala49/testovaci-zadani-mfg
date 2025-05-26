import React, { useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    searchTerm: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage, searchTerm }) => {
    // Generate page numbers for pagination
    const getPageNumbers = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        const maxCount = 5;

        if (totalPages <= maxCount) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // If total pages are more than maxCount, show first, last and current page with maxCount - 1 surrounding pages
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    // Reset to first page when search term changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, setCurrentPage]);

    // Handle exact page navigation
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    // Handle next and previous page navigation
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="pagination flex justify-center items-center gap-4 mt-6">
            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`btn-secondary bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer transition-colors ${
                    currentPage !== 1 ? 'hover:bg-violet-500 hover:text-white' : ''
                }`}
            >
                Předchozí
            </button>

            {getPageNumbers().map((page, index) =>
                page === '...' ? (
                    <span key={`ellipsis-${index}`} className="text-gray-500">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => goToPage(page as number)}
                        className={`btn-page ${
                            currentPage === page ? 'bg-violet-500 text-white' : 'bg-white text-violet-500'
                        } px-4 py-2 rounded-lg cursor-pointer`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`btn-secondary bg-gray-300 text-gray-700 px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer transition-colors ${
                    currentPage !== totalPages ? 'hover:bg-violet-500 hover:text-white' : ''
                }`}
            >
                Další
            </button>
        </div>
    );
};

export default Pagination;
