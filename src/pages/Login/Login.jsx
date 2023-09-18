import React, { useState, useContext } from "react";
import "./Login.css";

import AuthContext from "../../context/AuthContext";

import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

import { Link } from "react-router-dom";

function Login() {
  const [palid, setPalid] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  async function connectPal(event) {
    event.preventDefault();
    login(palid, password);
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
                  onChange={(e) => setPalid(e.target.value.toLowerCase())}
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
                  Sign up
                </Link>
              </div>
            </form>
            <span className="or">OR</span>
            <div className="alternative-login">
              <Link to="/search">
                <button className="anonymous-btn">Go Anonymous</button>
              </Link>
              <Link to="/search">
                <button className="google-btn">
                  <FcIcons.FcGoogle />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
