import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import diamond from "../../assets/diamond.mp3";

import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [logoColor, setLogoColor] = useState("blue");

  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ["blue", "black"];
      const nextIndex = (colors.indexOf(logoColor) + 1) % colors.length;
      setLogoColor(colors[nextIndex]);
      document.body.classList.add("black");
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
                onMouseOver={() => {
                  setHovered(!hovered);
                }}
              />
            </Link>
            {hovered && <audio src={diamond} autoPlay />}
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
      <main className="logo-container">
        <h1 className="logo" style={{ color: logoColor }}>
          Hii pal!
        </h1>

        <p className="slogan">
          This decentralized application helps you to make a transaction with
          your pals.
        </p>
      </main>
    </div>
  );
}

export default Navbar;
