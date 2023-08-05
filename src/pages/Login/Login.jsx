import React, { useState } from "react";
import "./Login.css";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

import { Link } from "react-router-dom";

function Login() {
  const [palid, setPalid] = useState("");
  const [password, setPassword] = useState("");

  async function connectPal(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8888/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ palid, password }),
    });

    async function getDataWithToken(token) {
      // Make the GET request to your backend with the token in the Authorization header
      const response = await fetch("http://localhost:8888/get/test", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Data with token:", data);
    }

    const data = await response.json();
    if (data.status == "green") {
      console.log(data);
      // Call the function to make the authenticated GET request with the token
      await getDataWithToken(data.token);
      window.location.href = "#/search";
    } else {
      alert("Please check your pal ID and password.");
    }
  }

  return (
    <>
      <div className="main-container">
        <div className="login-form-div">
          <div className="form-wrapper">
            <form action="" onSubmit={connectPal} className="form-container">
              <div className="form-group">
                <input
                  required
                  type="text"
                  id="palid"
                  className="form-input"
                  pattern="^(?=.*[A-Za-z])[A-Za-z0-9_]{4,15}$"
                  title="Enter valid pal ID"
                  placeholder="Enter valid pal ID"
                  value={palid}
                  onChange={(e) => setPalid(e.target.value)}
                />
                <label htmlFor="palid" className="form-label">
                  pal ID
                </label>
              </div>
              <div className="form-group">
                <input
                  required
                  type="password"
                  id="password"
                  className="form-input"
                  title="Enter correct password"
                  placeholder="Enter correct password"
                  pattern=".{8,}"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="form-label">
                  password
                </label>
              </div>
              <button type="submit" className="form-submit-button">
                Connect <AiIcons.AiOutlineThunderbolt className="login-icon" />
              </button>
              <div
                style={{
                  textAlign: "left",
                  fontSize: ".7rem",
                  fontWeight: 650,
                }}
              >
                Don't have an account?&nbsp;
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/signup"
                >
                  Register
                </Link>
              </div>
            </form>
            <span className="or">OR</span>
            <Link to="/search">
              <button className="anonymous-btn">Go Anonymous</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
