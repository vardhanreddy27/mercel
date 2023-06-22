import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Autosuggest from "react-autosuggest";

function Search() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch search suggestions from the API endpoint
  const fetchSuggestions = async (value) => {
    try {
      const response = await fetch(
        `https://mercel.vercel.app/api/searchSuggestions?query=${value}`
      );
      const data = await response.json();
      const suggestionData = JSON.stringify(data.suggestions);
      setSuggestions(JSON.parse(suggestionData));
    } catch (error) {
      console.error("Failed to fetch search suggestions:", error);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    // Fetch suggestions when input value changes
    fetchSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    // Clear suggestions when input is cleared
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Search...",
    value,
    onChange,
    className: "custom-input",
  };

  const searchProducts = async () => {
    try {
      const response = await fetch(
        `https://mercel.vercel.app/api/searchProducts?query=${value}`
      );
      const data = await response.json();
      // Process the received data (e.g., update state with the products)
      console.log("Received products:", data);
    } catch (error) {
      console.error("Failed to fetch search products:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchProducts();
  };

  return (
    <div className="search-input p-3 activebackground">
      <form onSubmit={handleSearch}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          theme={{
            suggestion: "custom-suggestion", //custom CSS class for suggestion items
            suggestionsContainer: "custom-suggestions-container", //custom CSS class for the suggestions container
          }}
        />
        <button type="submit">
          <FaSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;