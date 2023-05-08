import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import diamond from "../../assets/diamond.mp3";

import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";

function Navbar() {
  let audio = new Audio(diamond);
  const [logoColor, setLogoColor] = useState("black");

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["black", "blue"];
      const nextIndex = (colors.indexOf(logoColor) + 1) % colors.length;
      setLogoColor(colors[nextIndex]);
      document.body.classList.add("blue");
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
      document.body.classList.remove(`${logoColor}`);
    };
  }, [logoColor]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link className="nav-link" to="/">
              <HiIcons.HiOutlineHome className="nav-icon" title="Home" />
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/search">
              <BiIcons.BiSearchAlt2 className="nav-icon" title="Search" />
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/transaction">
              <img
                src="../../eth.svg"
                className="nav-icon"
                height={"0.75rem"}
                title="Hii"
                onClick={() => audio.play()}
              />
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/notifications">
              <MdIcons.MdOutlineNotifications
                className="nav-icon"
                title="Notifications"
              />
            </Link>
          </li>
          <li className="navbar-li">
            <Link className="nav-link" to="/message">
              <TbIcons.TbMessage2 className="nav-icon" title="Message" />
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="header" style={{ color: logoColor }}>
        Hii pal!
      </h1>
    </div>
  );
}

export default Navbar;
