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
        placeholder="search.."
      />
    </div>
  );
}

export default SearchBar;
