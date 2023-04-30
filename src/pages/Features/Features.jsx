import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddItems from "../../components/AddItems/AddItems";
import SearchBar from "../../components/SearchBar/SearchBar";

function Features() {
  const [variable, setVariable] = useState("");

  const handleVariableChange = (value) => {
    setVariable(value);
  };
  return (
    <div>
      <SearchBar onVariableChange={handleVariableChange} />
      <AddItems query={variable} />
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Features;
