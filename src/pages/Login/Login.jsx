import React, { useState } from "react";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  const [palid, setPalid] = useState("");
  const [password, setPassword] = useState("");

  async function connectPal(event) {
    event.preventDefault();
    const response = await fetch("https://hiipal.netlify.app/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ palid, password }),
    });

    const data = await response.json();
    if (data.pal) {
      window.location.href = "#/search";
    } else {
      alert("Please check your pal ID and password.");
    }
  }

  return (
    <>
      <div className="login-form-div">
        <div className="form-wrapper">
          <form action="" onSubmit={connectPal} className="form-container">
            <div className="form-group">
              <label htmlFor="palid" className="form-label">
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 0 }}
                >
                  p
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 1 }}
                >
                  a
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 2 }}
                >
                  l
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 3 }}
                >
                  &nbsp;
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 4 }}
                >
                  I
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 5 }}
                >
                  D
                </span>
                {/* <span className="sr-only">pal ID</span> */}
              </label>
              <div className="form-group__input palid-wrapper">
                <input
                  required
                  type="text"
                  id="palid"
                  className="form-input palid-input"
                  pattern="^(?=.*[A-Za-z])[A-Za-z0-9_]{4,15}$"
                  title="Enter valid pal ID"
                  placeholder="Enter valid pal ID"
                  value={palid}
                  onChange={(e) => setPalid(e.target.value)}
                />
                <span class="at-symbol">@</span>
                <div className="form-group__error">Enter a valid ID</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 0 }}
                >
                  p
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 1 }}
                >
                  a
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 2 }}
                >
                  s
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 3 }}
                >
                  s
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 4 }}
                >
                  w
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 5 }}
                >
                  o
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 5 }}
                >
                  r
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 5 }}
                >
                  d
                </span>
                {/* <span className="sr-only">password</span> */}
              </label>
              <div className="form-group__input">
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
                <div className="form-group__error">Enter correct password</div>
              </div>
            </div>
            <button type="submit" className="form-submit-button">
              Connect <AiIcons.AiOutlineThunderbolt className="login-icon" />
            </button>
            <div
              style={{
                textAlign: "left",
                fontSize: ".75rem",
                fontWeight: 700,
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
          <div className="or-container">
            <hr className="half-width-hr"></hr>
            <span className="or-text">OR</span>
            <hr className="half-width-hr"></hr>
          </div>
          <Link to="/search">
            <button className="anonymous-btn">Go Anonymous</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
