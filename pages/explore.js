import React from "react";
import HousesFeed from "../components/feeds/HousesFeed";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import NavAuth from "../components/layout/NavAuth";
import UserPostCard from "../components/userProfile/UserProfilePosts";
import NewsFeedImages from "../components/newsfeed/NewsFeedImages";

export default function houses() {
  return (
    <div style={{ background: "$background" }}>
      <NavAuth />
      <NewsFeedImages />
      <Footer />
    </div>
  );
}
