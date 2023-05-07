import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Features from "../Features/Features";

function Search() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Features />
      </div>
    </>
  );
}

export default Search;
