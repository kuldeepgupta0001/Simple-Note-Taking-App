import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
};

export default SearchBar;
