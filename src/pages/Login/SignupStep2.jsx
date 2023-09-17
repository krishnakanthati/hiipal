import React, { useState } from "react";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function SignupStep2({ formData, setFormData }) {
  const [dateInputType, setDateInputType] = useState("text");

  const handleDateFocus = () => {
    setDateInputType("date");
  };

  const handleDateBlur = () => {
    if (!formData.date) {
      setDateInputType("text");
    }
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <input
          required
          type="tel"
          id="phone"
          pattern="[0-9]{10}"
          className="form-input"
          title="Enter correct phone number"
          placeholder="Enter correct phone number"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
          }}
        />
        <label htmlFor="phone" className="form-label">
          phone
        </label>
      </div>
      <div className="form-group">
        <input
          required
          type={dateInputType}
          onBlur={handleDateBlur}
          onFocus={handleDateFocus}
          id="dob"
          className="form-input"
          value={formData.dob}
          onChange={(e) => {
            setFormData({ ...formData, dob: e.target.value });
          }}
          title="Enter your Date of Birth"
          placeholder="Enter your Date of Birth"
        />
        <label htmlFor="dob" className="form-label">
          d.o.b
        </label>
      </div>
      <div className="form-group">
        <div className="form-group__input">
          <input
            required
            type="text"
            id="country"
            className="form-input"
            title="Enter country"
            placeholder="Enter country"
            pattern=".{8,}"
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.target.value });
            }}
          />
          <label htmlFor="password" className="form-label">
            country
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignupStep2;
