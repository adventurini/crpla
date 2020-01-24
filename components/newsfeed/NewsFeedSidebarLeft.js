import React from "react";
import Link from "next/link";
import "./NewsFeedSidebarLeft.scss";
import { FiUser } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { FaHome, FaHashtag } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import UserAvatar from "../layout/UserAvatar";

export default function NewsFeedSidebarLeft(props) {
  const { activeTab, setActiveTab } = props;

  const image =
    "https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512";

  return (
    <div className="side-bar-left">
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <MdRssFeed className="side-bar-icon" />{" "}
        <a
          className={activeTab === "feed" ? "bold" : ""}
          onClick={() => setActiveTab("feed")}
        >
          Feed
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <IoIosTrendingUp className="side-bar-icon" />{" "}
        <a
          className={activeTab === "trending" ? "bold" : ""}
          onClick={() => setActiveTab("trending")}
        >
          Trending
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <FaHome className="side-bar-icon" />{" "}
        <a
          className={activeTab === "listings" ? "bold" : ""}
          onClick={() => setActiveTab("listings")}
        >
          Listings
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <FaHashtag className="side-bar-icon" />{" "}
        <a
          className={activeTab === "explore" ? "bold" : ""}
          onClick={() => setActiveTab("explore")}
        >
          Explore
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <div className="side-bar-avatar">
          <UserAvatar image={image} width="40px" height="40px" />{" "}
        </div>
        <Link href="/user/adventurini">
          <a  className={activeTab === "profile" ? "bold" : ""}  onClick={() => setActiveTab("profile")}>Profile</a>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <Link href="/photoupload">
          <button>Upload Listing Photos</button>
        </Link>
      </div>
    </div>
  );
}
