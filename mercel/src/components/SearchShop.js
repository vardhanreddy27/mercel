import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchShop({ handleSearch }) {
  return (
    <div className="search-input top pt-3 ps-3 pe-3 activebackground">
      <input
        type="text"
        className="searchbar herobannerbg shadow-sm form-control"
        placeholder="Search shops..."
        onChange={handleSearch}
      />
      <FaSearch className="searchs-icon" />
    </div>
  );
}

export default SearchShop;
