import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Login from "../Login/Login";
import Info from "../../components/Info/Info";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Login />
        <Footer />
      </div>
      <Info />
    </>
  );
}

export default Home;
