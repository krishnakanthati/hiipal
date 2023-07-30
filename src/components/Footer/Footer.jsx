import React, { useEffect, useState } from "react";
import "./Footer.css";

import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";

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
      <div className="footer-icon">
        <div>
          <BiIcons.BiShare />
        </div>
        <div>
          <IoIcons.IoShareSocialSharp />
        </div>
      </div>
      <div className="email">hiipal.com &copy; 2023</div>
    </div>
  );
}

export default Footer;
