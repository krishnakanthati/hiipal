import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="pal-count">
        pal: 27 (<span style={{ color: "#00c50b" }}>+4</span>)
      </div>
      <div className="email">hiipal@hotmail.com</div>
    </div>
  );
}

export default Footer;
