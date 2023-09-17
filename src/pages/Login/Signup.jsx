import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import * as AiIcons from "react-icons/ai";
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
          <form action="" className="form-container">
            {/* <div className="progressbar"></div> */}
            {StepForm()}
            {step === 1 ? (
              <button
                type="submit"
                onClick={() => {
                  handleNext();
                }}
                className="form-submit-button continue"
              >
                Continue..
              </button>
            ) : (
              <div className="signup-button-div">
                <button
                  onClick={() => {
                    handlePrevious();
                  }}
                  className="form-submit-button prev"
                >
                  Previous
                </button>
                {step === 3 ? (
                  <button type="submit" className="form-submit-button submit">
                    Register{" "}
                    <AiIcons.AiFillThunderbolt className="login-icon" />
                  </button>
                ) : (
                  <button
                    type="submit"
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
