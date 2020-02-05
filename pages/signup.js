import React from "react";
import Register from "../components/authentication/Register";
import Nav from "../components/layout/Nav"

export default function signup() {
  return <div className="signup-container" style={{background: "rgb(66, 43, 216)", height: "100vh"}}>
    <Nav />
    <div style={{paddingTop: "110px"}}></div>
      <Register />
  </div>;
}
