import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-content-left">
        <div className="logo"></div>
        <h2>Curpela Has the <br /> Best Houses</h2>
      </div>
      <div className="login-content-right">
          <div className="login-content-form">
            <div className="login-form-type">
          <h3>Sign In</h3>
          <p>New User? Create an Account</p>
          </div>
          <form>
          <input className="email" placeholder="Email"></input>
          <input placeholder="Password"></input>
          <button>Log In</button>
          </form>
          <p>or</p>
          <button className="Google">Sign in with Google</button>
          <button className="Facebook">Sign in with Facebook</button>
      </div>
      </div>
    </div>
  );
}
