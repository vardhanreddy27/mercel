import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchShop() {
  return (
    <div className="search-input pt-3 ps-3 pe-3 activebackground">
      <input
        type="text"
        className="searchbar herobannerbg shadow-sm form-control"
        placeholder="Search shops..."
      />
      <FaSearch className="searchs-icon" />
    </div>
  );
}

export default SearchShop;
