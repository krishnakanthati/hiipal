import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Login from "../Login/Login";

function Home() {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <Login />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
