import React from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => (
  <div className="header">
    <Nav />
    <h1>Welcome to Curpela</h1>
    <h2>Homes Live Here</h2>
    <button>Discover</button>
  </div>
);

export default Header;
