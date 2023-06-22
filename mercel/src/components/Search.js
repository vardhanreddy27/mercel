import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autosuggest from "react-autosuggest";

function Search() {
  const navigate = useNavigate();
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

  const renderSuggestion = (suggestion) => {
    return (
      <div
        onClick={() => {
          handleSuggestionClick(suggestion);
        }}
      >
        {suggestion}
      </div>
    );
  };

  const handleSearch = () => {
    searchProducts();
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    searchProducts();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchProducts();
    }
  };

  const searchProducts = async () => {
    try {
      const response = await fetch(
        `https://mercel.vercel.app/api/searchProducts?query=${value}`
      );
      const data = await response.json();
      // Process the received data (e.g., update state with the products)
      console.log("Received products:", data);
      // Navigate to the products page with the products data
      navigate('/Products', { state: { products: data } }); // Pass the state property
    } catch (error) {
      console.error("Failed to fetch search products:", error);
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Search...",
    value,
    onChange,
    className: "custom-input",
    onKeyPress: handleKeyPress, // Add onKeyPress event handler
  };

  return (
    <div className="search-input p-3 activebackground">
      <div className="search-form">
        <div className="search-input-container">
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
        </div>
      </div>
    </div>
  );
}

export default Search;