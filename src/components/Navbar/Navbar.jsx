import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import diamond from "../../assets/diamond.mp3";

import * as HiIcons from "react-icons/hi";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";

function Navbar() {
  let audio = new Audio(diamond);

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
              <TbIcons.TbMessage2 title="Message" className="nav-icon" />
            </Link>
          </li>
        </ul>
      </nav>
      {/* <h1 className="header">Hii pal!</h1> */}
      <header>
        <nav className="header">
          <ul className="header-ul">
            <li className="header-li">
              <Link className="nav-link" to="/">
                Hii pal!
              </Link>
            </li>
            <li className="header-li">
              <Link className="nav-link" to="/">
                <CgIcons.CgProfile className="nav-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
