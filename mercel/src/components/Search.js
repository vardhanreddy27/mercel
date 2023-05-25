import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search-input p-2">
      <input
        type="text"
        className="searchbar form-control"
        placeholder="Search..."
      />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default Search;
