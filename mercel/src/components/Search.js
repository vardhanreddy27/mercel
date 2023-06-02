import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="search-input p-3 activebackground">
      <input
        type="text"
        className="searchbar herobannerbg form-control"
        placeholder="Search..."
      />
      <FaSearch className="search-icon" />
    </div>
  );
}

export default Search;
