import React, { useState, useContext } from "react";

import "./SearchBar.css";
import AuthContext from "../../context/AuthContext";

function SearchBar({ onVariableChange }) {
  const { isAuthenticated } = useContext(AuthContext);
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
        disabled={!isAuthenticated}
        placeholder="search.."
      />
    </div>
  );
}

export default SearchBar;
