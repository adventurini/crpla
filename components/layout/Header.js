import React from "react";
import Link from 'next/link'
import Nav from "./Nav";
import "./Header.scss";

const Header = () => (
  <>
    
  <div className="header">
    <div className="header-content-left">
    <h1>Real Estate Content Platform</h1> 
    
    <h2>Manage your workflow, build a brand, & attract an <br/>audience all under one simple platform</h2>
    {/* <input type="text" placeholder="Enter a city or Zip code"></input> */}
    <Link href="/houses">
    <button>Explore the Platform</button>
    </Link>
    </div>
    <div className="header-content-right">
      <img src="/static/header.png" alt="worker"></img>
    </div>
  </div>
  </>
);

export default Header;
