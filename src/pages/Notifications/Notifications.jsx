import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

import "./Notifications.css";

function Notifications() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="choice">
          <div className="div-a">A</div>
          <div className="div-b">B</div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
