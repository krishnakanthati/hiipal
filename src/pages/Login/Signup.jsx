import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Signup() {
  const [palid, setPalid] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const inputStyle = {
    /* Add your custom styles here */
    /* For example: */
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "4px",
    width: "100%",
  };

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
              <label htmlFor="email" className="form-label">
                pal ID
              </label>
            </div>
            <div className="form-group">
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
                <label htmlFor="password" className="form-label">
                  password
                </label>
              </div>
            </div>
            <div className="form-group">
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
              <label htmlFor="phone" className="form-label">
                phone
              </label>
            </div>

            <button type="submit" className="form-submit-button">
              Register <AiIcons.AiFillThunderbolt className="login-icon" />
            </button>
            <div
              style={{
                textAlign: "left",
                fontSize: ".7rem",
                fontWeight: 650,
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
