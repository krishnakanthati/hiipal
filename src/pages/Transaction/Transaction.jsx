import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.css";
import ExampleComponent from "../../components/ExampleComponent/ExampleComponent";
import AuthContext from "../../context/AuthContext";

function Transaction() {
  const data = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="main-container">{data.message}</div>
    </>
  );
}

export default Transaction;
