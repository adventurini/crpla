import React, { useState } from "react";
import dynamic from "next/dynamic";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import "./HousePosts.scss";
import PostCard from "../postCard/PostCard";
import {posts} from '../../data'

const CreatePost = dynamic(import ('../layout/CreatePost'),{ssr:false})

export default function HousePosts(props) {

  const{ active, setActiveTab} = props
  return (
    <div className="house-post-container">
      <div className="house-post-title">
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
        <CreatePost />
        {posts.length > 0 &&
          posts.map(post => (
           <PostCard post={post} />
          ))}
      </div>
    </div>
  );
}
