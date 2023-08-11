import React, { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onVariableChange }) {
  const [query, setQuery] = useState("");

  return (
    <div className="searchbar-div">
      <input
        type="search"
        value={query}
        className="searchbar"
        onChange={(e) => {
          setQuery(e.target.value);
          onVariableChange(e.target.value);
        }}
        placeholder="Search.."
      />
      <span class="search-icon">&#128269;</span>
    </div>
  );
}

export default SearchBar;
