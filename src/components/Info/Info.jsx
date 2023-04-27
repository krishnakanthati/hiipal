import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
import "./Info.css";

function Info() {
  const [info, setInfo] = useState(true);
  const toggleInfo = () => {
    setInfo(!info);
  };
  return (
    <div>
      {info ? <h1>Hii Pal!</h1> : <SearchBar />}
      <button className="info-button" onClick={toggleInfo}>
        <AiIcons.AiOutlineInfoCircle />
      </button>
    </div>
  );
}

export default Info;
