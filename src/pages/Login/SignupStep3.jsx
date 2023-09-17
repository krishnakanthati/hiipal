import React from "react";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function SignupStep3({ formData, setFormData }) {
  return (
    <div className="form-container">
      <div className="form-group">
        <input
          type="text"
          id="pic"
          className="form-input"
          value={formData.pic}
          onChange={(e) => {
            setFormData({ ...formData, pic: e.target.value });
          }}
          title="Enter your bio"
          placeholder="Enter your bio"
        />
        <label htmlFor="pic" className="form-label">
          pic
        </label>
      </div>
      <div className="form-group">
        <input
          type="text" // You can use type "text" for a single-line input
          id="bio"
          className="form-input"
          value={formData.bio}
          onChange={(e) => {
            setFormData({ ...formData, bio: e.target.value });
          }}
          title="Enter your bio"
          placeholder="Enter your bio"
        />
        <label htmlFor="bio" className="form-label">
          bio
        </label>
      </div>
    </div>
  );
}

export default SignupStep3;
