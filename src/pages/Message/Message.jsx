import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

import * as HiIcons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa6";

function Message() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="message-container">
          <div className="message-emoji">
            <BsIcons.BsEmojiLaughing />
          </div>
          <div className="message-div">
            <input className="message-input" placeholder="Message" />
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
