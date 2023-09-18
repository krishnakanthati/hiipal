import React, { useState } from "react";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function SignupStep1({ formData, setFormData }) {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  if (passwordInput && confirmPasswordInput) {
    passwordInput.addEventListener("input", () => {
      const passwordValue = passwordInput.value;
      confirmPasswordInput.pattern = passwordValue;
    });
  }

  const handlePalidChange = (e) => {
    const value = e.target.value.toLowerCase();
    checkUsernameRealtime(value);
    setFormData({ ...formData, palid: value });
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

  return (
    <div className="form-container">
      <div className="form-group">
        <input
          required
          type="text"
          id="palid"
          className="form-input palid-input"
          pattern="^(?=.*[A-Za-z])[A-Za-z0-9_]{4,15}$"
          value={formData.palid}
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
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
        </div>
      </div>
      <div className="form-group">
        <div className="form-group__input">
          <input
            required
            type="password"
            id="confirmPassword"
            className="form-input"
            title="Confirm password"
            placeholder="Confirm password"
            pattern=".{8,}"
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
          />
          <label htmlFor="confirmPassword" className="form-label">
            verify
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignupStep1;
