import React, { useRef, useState, useMemo } from "react";
// import * as AiIcons from "react-icons/ai";

function SearchBar() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  // to get the value of Add items bar
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  function onSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search.."
      />

      {/* to add items to an array */}
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} placeholder="Add.." />
        <button title="Add" type="submit">
          +
        </button>
      </form>

      {/* display added items */}
      <h3>Added Items:</h3>
      {filteredItems.map((items) => (
        <div>{items}</div>
      ))}
    </div>
  );
}

export default SearchBar;
