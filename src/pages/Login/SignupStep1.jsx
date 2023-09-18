import React, { useState, useEffect } from "react";
import "./Login.css";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

function SignupStep1({ formData, setFormData }) {
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  console.log(isUsernameAvailable);
  useEffect(() => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (passwordInput && confirmPasswordInput) {
      passwordInput.addEventListener("input", () => {
        const passwordValue = passwordInput.value;
        confirmPasswordInput.pattern = passwordValue;
      });
    }

    return () => {
      // Clean up event listeners when the component unmounts
      if (passwordInput && confirmPasswordInput) {
        passwordInput.removeEventListener("input", () => {
          const passwordValue = passwordInput.value;
          confirmPasswordInput.pattern = passwordValue;
        });
      }
    };
  }, []);

  const handlePalidChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFormData({ ...formData, palid: value });
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      checkUsernameRealtime(formData.palid);
    }, 500);
    return () => {
      clearTimeout(timerId); // Clear the timer when the component unmounts
    };
  }, [formData.palid]);

  const checkUsernameRealtime = async (value) => {
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
      setIsUsernameAvailable(data.exists);
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
          title="Enter valid pal ID"
          placeholder="Enter valid pal ID"
          style={{ paddingRight: "1rem" }}
        />
        <label htmlFor="palid" className="form-label">
          pal ID
        </label>
        {isUsernameAvailable === false ? (
          <span className="checkmark">
            <IoIcons.IoIosCheckmark style={{ color: "green" }} />
          </span>
        ) : (
          <span className="checkmark">
            <IoIcons.IoIosClose style={{ color: "red" }} />
          </span>
        )}
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
