
import React, { useState } from "react"
import logo from './logoww.png';

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
 
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Register
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" href = "110/wellnesswave/src/Home.js">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="Auth-form">
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                Sign In
                </span>
            </div>
            <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                required
                />
            </div>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                required
                />
            </div>
            <div className="d-grid gap-2 mt-3">
            <a href="110/wellnesswave/src/Home.js">
              <button type="submit" className="btn btn-primary">               
                Submit
              </button>
            </a> 
            </div>
            <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
            </p>
            </div>
        </form>
    </div>
  )
}