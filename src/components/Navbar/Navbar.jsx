import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import diamond from "../../assets/diamond.mp3";

import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons2 from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as RxIcons from "react-icons/rx";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  let audio = new Audio(diamond);

  return (
    <>
      <header>
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Link className="nav-link" to="/">
                <HiIcons.HiOutlineHome className="nav-icon" title="Home" />
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="nav-link" to="/search">
                <IoIcons2.IoSearch className="nav-icon" title="Search" />
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
        <nav className="header">
          <ul className="header-ul">
            <li className="header-li">
              <Link className="nav-link" to="/" style={{ color: "black" }}>
                Hii pal!
              </Link>
            </li>
            <li className="header-li">
              <Link
                className="nav-link"
                to=""
                onDoubleClick={() => setToggleMenu(!toggleMenu)}
              >
                {toggleMenu ? (
                  <IoIcons2.IoClose className="nav-icon" />
                ) : (
                  <CgIcons.CgMenuBoxed className="nav-icon" />
                )}
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="sidebar">
          <ul className="sidebar-ul">
            <li className="sidebar-li">
              <Link
                className="nav-link"
                to="https://www.buymeacoffee.com/krishnakanthati"
                title="Buy the developer a beer"
              >
                <BiIcons.BiLike className="nav-icon" />
              </Link>
            </li>
            <li className="sidebar-li">
              <Link className="nav-link" to="/">
                <RxIcons.RxTwitterLogo className="nav-icon" />
              </Link>
            </li>
            <li className="sidebar-li">
              <Link
                className="nav-link"
                to="https://github.com/krishnakanthati/hiipal"
              >
                <FaIcons.FaGithubAlt className="nav-icon" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
