import React from "react";

function Pagination({ pageNumber, nextFn, previousFn }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {/* Previous Button */}
      <button
        onClick={previousFn}
        disabled={pageNumber === 1}
        className={`px-4 py-2 rounded-full text-white transition duration-300 ${
          pageNumber === 1
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      {/* Page Number */}
      <span className="text-lg font-semibold px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow">
        Page {pageNumber}
      </span>

      {/* Next Button */}
      <button
        onClick={nextFn}
        className="px-4 py-2 bg-blue-500 text-white rounded-full transition duration-300 hover:bg-blue-600"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Pagination;
