import React, { useState } from "react";
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
    </div>
  );
}

export default Features;
