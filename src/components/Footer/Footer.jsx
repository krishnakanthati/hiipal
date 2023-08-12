import React, { useEffect, useState } from "react";
import "./Footer.css";

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
      <div className="email">dev@hiipal.com</div>
    </div>
  );
}

export default Footer;
