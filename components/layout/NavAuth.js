/*
 * Navbar for authenticated users
 */

import React from "react";
import Link from "next/link";
import CurpelaWordLogo from "../icons/CurpelaWordLogo";
import "./NavAuth.scss";

const links = [
  { href: "/", label: "Discover" },
  { href: "/", label: "Popular" },
  { href: "/", label: "Recent" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function NavAuth(props) {
  return (
    <div className="nav-auth">
      <div className="left-nav">
        <Link href="/">
          <a>
            <CurpelaWordLogo fill="#fff" width="120" />
          </a>
        </Link>
      </div>
      <div className="center-nav">
        {/* <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>

      <div className="right-nav">
        {/* Profile Picture */}
        <img
          className="nav-auth__profile-picture"
          src="https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
}

export default NavAuth;
