import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

import * as HiIcons from "react-icons/hi2";

function Message() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="message-container">
          <input className="message-input" placeholder="Message" />
          <div className="message-mic">
            <HiIcons.HiMiniMicrophone />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
