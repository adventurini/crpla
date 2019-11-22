import React from "react";
import Link from "next/link";
import './Nav.scss'

const links = [
  { href: "https://zeit.co/now", label: "Discover" },
  { href: "https://github.com/zeit/next.js", label: "Popular" },
  { href: "https://github.com/zeit/next.js", label: "Recent" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <div className='nav'>
    <div className="left-nav">
      <a>curpela</a>
    </div>
    <div className="center-nav">
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className="right-nav">
      <button>Log In</button>
      <button className="signup">Sign Up</button>
    </div>
  </div>
);

export default Nav;
