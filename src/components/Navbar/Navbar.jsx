import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import diamond from "../../assets/diamond.mp3";

import * as HiIcons2 from "react-icons/hi2";
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons2 from "react-icons/io5";
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as RxIcons from "react-icons/rx";
import * as AiIcons from "react-icons/ai";
import * as LuIcons from "react-icons/lu";

import SearchBar from "../SearchBar/SearchBar";

function Navbar({ isLoading }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const sidebarRef = useRef();

  let audio = new Audio(diamond);

  const handleKeyDown = (e) => {
    if (e.key === "s" && e.target.tagName.toLowerCase() !== "input") {
      setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {});

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
                  src="../../logo.svg"
                  className="nav-icon"
                  height={"0.75rem"}
                  title="Hii"
                  onClick={() => audio.play()}
                />
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="nav-link" to="/notifications">
                <AiIcons.AiOutlineFire
                  className="nav-icon"
                  title="Notifications"
                />
              </Link>
            </li>
            <li className="navbar-li">
              <Link className="nav-link" to="/message">
                <BiIcons.BiChat className="nav-icon" title="Message" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="header">
          <ul className="header-ul">
            <li className="header-li">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Hii pal
                <span style={{ color: "#2f88ff" }}>!</span>
              </Link>
            </li>
            <li className="header-li">
              <SearchBar className="nav-link" />
            </li>
            {/* {isLoading && (
              <li className="header-li">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "red", fontSize: ".85rem" }}
                >
                  loading..
                </Link>
              </li>
            )} */}
            <li className="sidebar-li">
              <Link
                className="nav-link"
                to=""
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                {toggleMenu ? (
                  <TbIcons.TbLayoutSidebarRight
                    className="nav-icon"
                    title="close"
                  />
                ) : (
                  <TbIcons.TbLayoutSidebar
                    className="nav-icon"
                    title="sidebar"
                  />
                )}
              </Link>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav ref={sidebarRef} className="sidebar">
            <ul className="sidebar-ul">
              <li className="sidebar-li">
                <Link className="nav-link" to="/">
                  <IoIcons2.IoSettingsOutline className="nav-icon" />
                </Link>
              </li>
              <li className="sidebar-li">
                <Link className="nav-link" to="/">
                  <LuIcons.LuMoon className="nav-icon" />
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
                  // to="https://www.buymeacoffee.com/krishnakanthati"
                  to="/#"
                  title="Buy the developer a beer"
                >
                  <BiIcons.BiLike className="nav-icon" />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
