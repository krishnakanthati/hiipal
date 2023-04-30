import React, { useRef, useState, useMemo } from "react";
// import * as AiIcons from "react-icons/ai";

function AddItems({ query }) {
  const [items, setItems] = useState([]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  // to get the value from the input
  const inputRef = useRef();

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
      {/* to add items to items array */}
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} placeholder="Add.." />
        <button title="Add" type="submit">
          +
        </button>
      </form>

      {/* display added items */}
      <h3>Added Items:</h3>
      {filteredItems.map((items, index) => (
        <div key={index}>{items}</div>
      ))}
    </div>
  );
}

export default AddItems;
