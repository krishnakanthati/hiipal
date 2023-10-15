import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

import * as HiIcons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa6";

function Message() {
  const inputRef = useRef();

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    const messageSend = document.querySelector(".message-send");

    if (inputValue.trim() !== "") {
      messageSend.style.color = "#00c50b";
    } else {
      messageSend.style.color = "black";
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="message-container">
          <div className="message-emoji">
            <BsIcons.BsEmojiLaughing />
          </div>
          <div className="message-div">
            <input
              className="message-input"
              placeholder="Message"
              ref={inputRef}
              onInput={handleInputChange}
            />
            <span className="message-send">
              <FaIcons.FaArrowUp />
            </span>
          </div>
          <div className="message-mic">
            <HiIcons.HiMiniMicrophone />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
