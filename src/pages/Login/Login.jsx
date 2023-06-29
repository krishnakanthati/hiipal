import React from "react";
import "./Login.css";
import * as AiIcons from "react-icons/ai";

function Login() {
  return (
    <>
      <div className="login-form-div">
        <form action="" className="form-container">
          <h2 className="login-header">
            Log in <AiIcons.AiOutlineThunderbolt className="login-icon" />
          </h2>
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
              <span className="sr-only">pal ID</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="text"
                id="email"
                className="form-input"
                pattern="^(?=.*[A-Za-z])[A-Za-z0-9_]{5,15}$"
                title="Enter valid pal ID"
                placeholder="Enter valid pal ID"
              />
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
                style={{ "--index": 5 }}
              >
                d
              </span>
              <span className="sr-only">password</span>
            </label>
            <div className="form-group__input">
              <input
                required
                type="password"
                id="password"
                className="form-input"
                title="Enter correct password"
                placeholder="Enter correct password"
              />
              <div className="form-group__error">Enter correct password</div>
            </div>
          </div>
          <button type="submit" className="form-submit-button">
            Connect
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;