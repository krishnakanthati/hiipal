import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <span className="pal-count">
        pal: 1 (<span style={{ color: "blue" }}>+4</span>)
      </span>
      <span className="footer">hiipal@hotmail.com</span>
    </div>
  );
}

export default Footer;
