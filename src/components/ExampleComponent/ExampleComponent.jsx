import React, { useRef } from "react";
import "./ExampleComponent.css";

const ExampleComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Accessing the input element using the ref
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} className="try-input" />
      <button onClick={handleClick}>Log Input Value</button>
    </div>
  );
};

export default ExampleComponent;
