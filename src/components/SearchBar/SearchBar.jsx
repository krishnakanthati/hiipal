import React, { useState } from "react";

function SearchBar({ onVariableChange }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onVariableChange(e.target.value);
        }}
        placeholder="Search.."
      />
    </div>
  );
}

export default SearchBar;
