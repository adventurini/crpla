import React from "react";
import Register from "../components/authentication/Register";
import Nav from "../components/layout/Nav"

export default function signup() {
  return <div className="signup-container">
    <Nav />
      <Register />
  </div>;
}
