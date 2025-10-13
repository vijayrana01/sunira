import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-center items-center gap-2 pb-6 mt-6">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded-md"
        >
          Previous
        </button>
      )}

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-md ${
              currentPage === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {currentPage < totalPages && (
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
