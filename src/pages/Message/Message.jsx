import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Message.css";

import * as IoIcons from "react-icons/io";

function Message() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="message-container">
          <input className="message-input" />
          <div className="message-mic">
            <IoIcons.IoMdMic />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
