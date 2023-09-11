import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.css";
import ExampleComponent from "../../components/ExampleComponent/ExampleComponent";
import TestContext from "../../context/TestContext";

function Transaction() {
  const data = useContext(TestContext);
  return (
    <>
      <Navbar />
      <div className="main-container">{data.message}</div>
    </>
  );
}

export default Transaction;
