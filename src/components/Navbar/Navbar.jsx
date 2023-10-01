import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

import diamond from "../../assets/diamond.mp3";

import SearchBar from "../SearchBar/SearchBar";
import AuthContext from "../../context/AuthContext";

import * as PiIcons from "react-icons/pi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons2 from "react-icons/io5";
import * as TbIcons from "react-icons/tb";
import * as LiaIcons from "react-icons/lia";
import * as RxIcons from "react-icons/rx";
import * as AiIcons from "react-icons/ai";

function Navbar({ isLoading }) {
  const { logout } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();
  let audio = new Audio(diamond);

  const [variable, setVariable] = useState("");

  const handleVariableChange = (value) => {
    setVariable(value);
  };

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
                <BiIcons.BiHomeAlt2 className="nav-icon" title="Home" />
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
                <PiIcons.PiChatTeardropText
                  className="nav-icon"
                  title="Message"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="header">
          <ul className="header-ul">
            <li className="header-li">
              <Link className="nav-link" to="/profile">
                <div className="profile"></div>
              </Link>
            </li>
            {/* <li className="header-li">
              <SearchBar
                onVariableChange={handleVariableChange}
                className="nav-link"
              />
            </li> */}
            <li className="header-li">
              <Link className="nav-link" to="/">
                <BiIcons.BiPlus className="nav-icon" />
              </Link>
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
            {/* <li className="header-li">
              <Link className="nav-link">
                <AiIcons.AiOutlineStar className="nav-icon" />
              </Link>
            </li> */}
            <li className="header-li">
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
                  <BiIcons.BiShare className="nav-icon" />
                </Link>
              </li>
              {/* <li className="sidebar-li">
                <Link className="nav-link" to="/">
                  <LuIcons.LuMoon className="nav-icon" />
                </Link>
              </li> */}
              <li className="sidebar-li">
                <Link className="nav-link" to="/">
                  <RxIcons.RxTwitterLogo className="nav-icon" />
                </Link>
              </li>
              <li className="sidebar-li">
                <Link className="nav-link" to="/">
                  <LiaIcons.LiaUserEditSolid className="nav-icon" />
                </Link>
              </li>

              {/* <li className="sidebar-li">
                <Link
                  className="nav-link"
                  // to="https://www.buymeacoffee.com/krishnakanthati"
                  to="/#"
                  title="Buy the developer a beer"
                >
                  <BiIcons.BiLike className="nav-icon" />
                </Link>
              </li> */}
              <li className="sidebar-li">
                <Link className="nav-link" to="">
                  <IoIcons2.IoClose
                    style={{ color: "red" }}
                    className="nav-icon"
                    onClick={logout}
                  />
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
