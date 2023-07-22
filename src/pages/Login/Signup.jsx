import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Signup() {
  const [palid, setPalid] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handlePalidChange = (e) => {
    const { value } = e.target;
    setPalid(value);
    checkUsernameRealtime(value);
  };

  const checkUsernameRealtime = async (value) => {
    console.log(value);
    try {
      const response = await fetch(
        "https://hiipal.netlify.app/api/check-username",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ value }),
        }
      );
      const data = await response.json();
      if (data.exists) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error("Error checking username availability:", error);
      // Handle error and display an appropriate message
    }
  };

  async function registerPal(event) {
    event.preventDefault();
    const response = await fetch("https://hiipal.netlify.app/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ palid, password, phone }),
    });

    const data = await response.json();
    if (data.status === "green") {
      window.location.href = "#/";
    }
  }

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="login-form-div">
          <form action="" onSubmit={registerPal} className="form-container">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
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
                  value={palid}
                  onChange={handlePalidChange}
                  // onChange={(e) => setPalid(e.target.value)}
                  title="Enter valid pal ID"
                  placeholder="Enter valid pal ID"
                />
                <span class="at-symbol">@</span>
                <div className="form-group__error">Enter a valid pal ID</div>
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
                  style={{ "--index": 6 }}
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
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
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
                  h
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 2 }}
                >
                  o
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 3 }}
                >
                  n
                </span>
                <span
                  aria-hidden="true"
                  className="label__letter"
                  style={{ "--index": 4 }}
                >
                  e
                </span>
                {/* <span className="sr-only">phone</span> */}
              </label>
              <div className="form-group__input">
                <input
                  required
                  type="tel"
                  id="phone"
                  pattern="[0-9]{10}"
                  className="form-input"
                  title="Enter correct phone number"
                  placeholder="Enter correct phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <div className="form-group__error">
                  Enter correct phone number
                </div>
              </div>
            </div>

            <button type="submit" className="form-submit-button">
              Register <AiIcons.AiFillThunderbolt className="login-icon" />
            </button>
            <div
              style={{
                textAlign: "left",
                fontSize: ".75rem",
                fontWeight: 700,
              }}
            >
              Have an account already?&nbsp;
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
