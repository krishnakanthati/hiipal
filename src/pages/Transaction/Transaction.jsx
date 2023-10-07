import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.css";
import * as BiIcons from "react-icons/bi";
import AuthContext from "../../context/AuthContext";

function Transaction() {
  const data = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="">
          <div className="sticky-bar">
            <BiIcons.BiPlus className="options-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
