import React from 'react'
import './Register.scss'

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-content-left">
        <div className="logo"></div>
        <h2>Curpela Has the <br /> Best Houses</h2>
      </div>
      <div className="register-content-right">
          <div className="register-content-form">
            <div className="register-form-type">
          <h3>Sign Up</h3>
          <p>Already have an account? Sign in</p>
          </div>
          <form>
          <input className="email" placeholder="Email"></input>
          <input placeholder="Password"></input>
          <input placeholder="Confirm Password"></input>
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
