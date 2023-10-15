import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

import * as HiIcons from "react-icons/hi2";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

function Message() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="message-container">
          <div className="message-emoji">
            <BsIcons.BsEmojiLaughing />
          </div>
          <input className="message-input" placeholder="Message" />
          <span className="message-send">
            <IoIcons.IoSend />
          </span>
          <div className="message-mic">
            <HiIcons.HiMiniMicrophone />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
