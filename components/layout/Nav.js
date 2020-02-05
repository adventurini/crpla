import React from "react";
import Link from "next/link";
import CurpelaWordLogo from "../icons/CurpelaWordLogo";
import "./Nav.scss";

const links = [
  { href: "/explore", label: "Discover" },
  { href: "/", label: "Popular" },
  { href: "/", label: "Recent" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({setAuthTab}) => {
  return (
    <div className="nav">
      <div className="left-nav">
        <Link href="/">
          <a>
            <CurpelaWordLogo fill="white" width="120" />
          </a>
        </Link>
      </div>
      {/* <div className="center-nav">
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="right-nav">
          <button onClick={()=> setAuthTab("login")}>Log In</button>
          <button onClick={()=> setAuthTab("register")} className="signup">Sign Up</button>
      </div>
    </div>
  );
};
export default Nav;
