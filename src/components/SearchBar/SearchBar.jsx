import React, { useState, useContext, useEffect, useRef } from "react";

import "./SearchBar.css";
import AuthContext from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar({ onVariableChange }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleSearchInputFocus = () => {
    navigate("/search");
  };

  useEffect(() => {
    if (location.pathname === "/search" && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [location.pathname]);

  return (
    <div className="searchbar-div">
      <input
        type="search"
        value={query}
        className="searchbar"
        id="searchbar"
        onChange={(e) => {
          setQuery(e.target.value);
          onVariableChange(e.target.value);
        }}
        disabled={!isAuthenticated}
        placeholder="search.."
        onFocus={handleSearchInputFocus}
        ref={searchInputRef}
      />
    </div>
  );
}

export default SearchBar;
