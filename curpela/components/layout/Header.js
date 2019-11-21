import React from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => (
    <>
    
  <div className="header">
    
    <h1>Featuring the <span>Best Houses</span></h1> 
    <h2>Browse homes near you</h2>
    <input type="text" placeholder="Enter a city or Zip code"></input>
    {/* <button>Discover</button> */}
  </div>
  </>
);

export default Header;
