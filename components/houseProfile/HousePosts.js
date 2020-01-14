import React, { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import "./HousePosts.scss";
import PostCard from "../postCard/PostCard";

const posts = [
  "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1509119891769-8c8648bc3a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1509119891769-8c8648bc3a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

export default function HousePosts(props) {

  const{ active, setActiveTab} = props
  return (
    <div className="house-post-container">
      <div className="house-post-images-posts">
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

      <div className="house-post-images">
        <input placeholder="Share something"></input>
        {posts.length > 0 &&
          posts.map(post => (
           <PostCard post={post} />
          ))}
      </div>
    </div>
  );
}
