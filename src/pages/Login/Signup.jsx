import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";

function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    palid: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    dob: "",
    bio: "",
    pic: "",
  });

  // const areAllFieldsFilled = () => {
  //   const requiredFields = ["palid", "password", "confirmPassword"];
  //   return requiredFields.every((field) => formData[field].trim() !== "");
  // };

  // useEffect(() => {
  //   if (step === 1) {
  //     if (areAllFieldsFilled()) {
  //       document.querySelector(".continue-text").textContent = "Continue";
  //     } else {
  //       document.querySelector(".continue-text").textContent = "Register";
  //     }
  //   }
  // }, [step, formData]);

  async function registerPal(event) {
    event.preventDefault();
    const response = await fetch("https://hiipal.netlify.app/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status === "green") {
      window.location.href = "#/";
    }
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const StepForm = () => {
    if (step === 1) {
      return <SignupStep1 formData={formData} setFormData={setFormData} />;
    } else if (step === 2) {
      return <SignupStep2 formData={formData} setFormData={setFormData} />;
    } else {
      return <SignupStep3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="login-form-div">
          <form
            action=""
            method=""
            onSubmit={registerPal}
            className="form-container"
          >
            {/* <div className="progressbar"></div> */}
            {StepForm()}
            {step === 1 ? (
              <button
                type="signup"
                onClick={() => {
                  handleNext();
                }}
                className="form-submit-button continue"
              >
                <span className="continue-text">Continue</span>{" "}
                <MdIcons.MdDoubleArrow className="login-icon" />
              </button>
            ) : (
              <div className="signup-button-div">
                <button
                  type="button"
                  onClick={() => {
                    handlePrevious();
                  }}
                  className="form-submit-button prev"
                >
                  Previous
                </button>
                {step === 3 ? (
                  <button
                    type="submit"
                    onClick={registerPal}
                    className="form-submit-button submit"
                  >
                    Register{" "}
                    <AiIcons.AiFillThunderbolt className="login-icon" />
                  </button>
                ) : (
                  <button
                    type="signup"
                    onClick={() => {
                      handleNext();
                    }}
                    className="form-submit-button next"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
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
