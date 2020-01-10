import React, { useState } from "react";
import "./UserPostCard.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa"

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

export default function UserPostCard(props) {
  const { active, setActive, setActiveTab } = props;

  return (
    <div className="user-post-container">
      <div className="images-posts">
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
        <input placeholder="Share something new"></input>
        {posts.length > 0 &&
          posts.map(post => (
            <div key={PopStateEvent} className="post">
              <div className="post-content">
                <div className="post-title">
                  <div className="post-user-avatar"></div>
                  <div className="post-credentials">
                    <p className="post-user-name">Anthony Venturini</p>
                    <p className="post-time">2 hours ago</p>
                  </div>
                </div>
                <p className="post-word-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <img src={post}></img>
              <div className="post-footer">
                  <div className="post-attributes">
                      <div className="post-likes">
                        <IoIosHeartEmpty className="like-icon"/>
                          <p className="number-of-likes">1.6k</p>
                      </div>
                      <div className="post-comments">
                      <FaRegComments className="comments-icon"/>
                          <p className="number-of-comments">127</p>
                      </div>
               
                  </div> 
                  <div className="comment-section">
                      <div className="comment-author-avatar"></div>
                    <div className="comment-author">JDvento</div>
                    <div className="comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                  <input className="comment-input" placeHolder="Add Comment"></input>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
