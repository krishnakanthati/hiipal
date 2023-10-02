import React, { useState } from "react";
import QueryContext from "../context/QueryContext";

function QueryProvider({ children }) {
  const [query, setQuery] = useState("");
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
}

export default QueryProvider;
