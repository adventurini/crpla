import React, { useState } from "react";
import dynamic from "next/dynamic";
import "./UserProfilePosts.scss";
import PostCard from "../postCard/PostCard";
import {posts} from '../../data.js'

const CreatePost = dynamic(import ('../layout/CreatePost'),{ssr:false})

export default function UserProfilePosts(props) {
  const { active, setActive, setActiveTab } = props;

  return (
    <div className="user-post-container">
      <div className="user-profile-images-posts">
        <a
          className={active === "images" && "bold"}
          onClick={() => setActiveTab("images")}
        >
          Images
        </a>{" "}
        <a
          className={active === "posts" && "bold"}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </a>
      </div>

      <div className="user-post-images">
        <CreatePost />
        {posts.length > 0 &&
          posts.map(post => (
            <PostCard post={post}/>
          ))}
      </div>
    </div>
  );
}
