import React from "react";

import * as IoIcons from "react-icons/io5";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.css";

function Transaction() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <p>Transaction</p>
        <button className="connect-wallet">
          Connect Wallet <IoIcons.IoWalletOutline />
        </button>
      </div>
    </>
  );
}

export default Transaction;
