import React from "react";

const Pagination = ({
  totalNotes,
  notesPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalNotes / notesPerPage);
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 mx-1 ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
