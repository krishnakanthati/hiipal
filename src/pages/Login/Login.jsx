import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <form action="">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            <span
              aria-hidden="true"
              className="label__letter"
              style={{ "--index": 0 }}
            >
              P
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
            <span className="sr-only">Email</span>
          </label>
          <div className="form-group__input">
            <input
              required
              type="email"
              id="email"
              className="form-input"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              title="Enter valid email address"
              placeholder="Enter valid email address"
            />
            <div className="form-group__error">Enter a valid email address</div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
