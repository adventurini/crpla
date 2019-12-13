import React from "react";
import Link from 'next/link'
import Nav from "./Nav";
import "./Header.scss";

const Header = () => (
    <>
    
  <div className="header">
    <div className="header-content">
    <h1>Built to sell real estate</h1> 
    <h2>Powered by content creators</h2>
    {/* <input type="text" placeholder="Enter a city or Zip code"></input> */}
    <Link href="/houses">
    <button>Explore the Platform</button>
    </Link>
    </div>
  </div>
  </>
);

export default Header;
