import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-4 space-x-2">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ${
          currentPage === index + 1 ? "bg-gray-900" : ""
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
    >
      Next
    </button>
  </div>
);

export default Pagination;
