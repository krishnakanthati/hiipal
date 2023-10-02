import React, { useState, useContext, useEffect, useRef } from "react";

import "./SearchBar.css";
import AuthContext from "../../context/AuthContext";
import QueryContext from "../../context/QueryContext";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const { query, updateQuery } = useContext(QueryContext);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const location = useLocation();

  const handleSearchInputFocus = () => {
    navigate("/search");
  };

  const handleQueryInputChange = (e) => {
    const newQuery = e.target.value;
    updateQuery(newQuery);
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
        onChange={handleQueryInputChange}
        disabled={!isAuthenticated}
        placeholder="search.."
        onFocus={handleSearchInputFocus}
        ref={searchInputRef}
      />
    </div>
  );
}

export default SearchBar;
