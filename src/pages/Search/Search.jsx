import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Search.css";

function Search() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <SearchBar className="searchbar" />
      </div>
    </>
  );
}

export default Search;
