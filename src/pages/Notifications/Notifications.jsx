import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Notifications() {
  const test = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/post/test", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: "joe" }),
      });

      const data = await response.json();
      if (data.status === "green") {
        // Handle successful registration here
        console.log("Test successful!");
        console.log(data.token);
      } else {
        // Handle registration failure here
        console.error("Registration failed:", data.error);
      }
    } catch (error) {
      // Handle fetch error or other exceptions
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <button onClick={test}>Post Test</button>
        <Link to="http://localhost:8888/get/profile">
          <button>Get Test</button>
        </Link>
      </div>
    </>
  );
}

export default Notifications;
