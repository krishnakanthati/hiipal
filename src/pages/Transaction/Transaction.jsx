import React from "react";

import * as IoIcons from "react-icons/io5";
import * as SiIcons from "react-icons/si";
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
        <div className="card">
          <SiIcons.SiEthereum className="eth-icon" />
          <div className="card-container">
            <p>
              <b>Pal ID: krishnakanthati</b>
            </p>
            <p>
              <b>Address: 0xadisil...kalll8</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
