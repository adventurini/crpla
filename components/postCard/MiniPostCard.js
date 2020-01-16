import React from "react";
import UserAvatar from "../layout/UserAvatar";
import './MiniPostCard.scss'

export default function MiniPostCard(props) {
  return (
    <div className="mini-post-card">
      <div className="mini-post-content">
        <div className="mini-post-title">
          <div className="mini-post-user-avatar">
            <UserAvatar width="50px" height="50px"/>
          </div>
          <div className="mini-post-credentials">
            <p className="mini-post-user-name">Anthony Venturini</p>
            <p className="mini-post-time">2 hours ago</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
        <p className="mini-post-word-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
