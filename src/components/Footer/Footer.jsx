import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

function Footer() {
  const [palRegisteredCount, setPalRegisteredCount] = useState(null);

  useEffect(() => {
    fetch("https://hiipal.netlify.app/api/pal/count")
      .then((response) => response.json())
      .then((data) => {
        if (data.count) {
          setPalRegisteredCount(data.count);
        }
      })
      .catch((error) => {
        console.log("Error retrieving pal count:", error);
      });
  }, []);

  return (
    <div className="footer">
      <div className="policy" style={{ color: "red" }}>
        <Link style={{ color: "black" }}>Terms</Link>.{" "}
        <Link style={{ color: "black" }}>Privacy</Link>.
      </div>
      <div className="email">
        dev@hiipal.com{" "}
        <span>
          <BsIcons.BsFillCaretDownFill />
        </span>
      </div>
    </div>
  );
}

export default Footer;
