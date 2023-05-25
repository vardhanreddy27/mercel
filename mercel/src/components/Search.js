import React, { useState } from "react";
import { InputGroup, FormControl, Dropdown } from "react-bootstrap";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    // Perform any additional search-related logic here
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (searchTerm) => {
    setSearchText(searchTerm);
    setShowDropdown(false);
    // Perform search based on selected term
  };
  // Sample trending search terms
  const trendingSearches = ["React", "Bootstrap", "Redux", "JavaScript"];

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
          <Dropdown.Toggle variant="secondary" id="dropdown-search" />
          <Dropdown.Menu>
            {trendingSearches.map((term) => (
              <Dropdown.Item
                key={term}
                onClick={() => handleDropdownSelect(term)}
              >
                {term}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>
    </nav>
  );
};
export default Search;
