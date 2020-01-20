import React, { useState } from "react";
import "./PostModal.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments, FaBluetooth } from "react-icons/fa";
import SingleImage from "./postImage/SingleImage";
import UserAvatar from "../layout/UserAvatar";

export default function PostModal(props) {
  const { post } = props;
  return (
    <div key={post} className="post-modal">
      <div className="post-modal-left">
     
        <div className="post-modal-image">
          <img src={post.url}></img>
        </div>
        <div className="post-modal-footer">
          <div className="post-modal-attributes">
            <div className="post-modal-likes">
              <IoIosHeartEmpty className="post-modal-like-icon" />
              <p className="post-modal-number-of-likes">1.6k</p>
            </div>
            <div className="post-modal-comments">
              <FaRegComments className="post-modal-comments-icon" />
              <p className="post-modal-number-of-comments">127</p>
            </div>
          </div>
        </div>
        </div>
        <div className="post-modal-right">
        <div className="post-modal-content">
          <div className="post-modal-title">
            <div className="post-modal-user-avatar">
              <UserAvatar image={post.url} height="50px" width="50px" />
            </div>
            <div className="post-modal-credentials">
              <p className="post-modal-user-name">Anthony Venturini</p>
              <p className="post-modal-time">2 hours ago</p>
            </div>
          </div>
          <p className="post-modal-word-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
          <div className="post-modal-comment-section">
            <div className="post-modal-comment-author-avatar"></div>
            <div className="post-modal-comment-author">JDvento</div>
            <div className="post-modal-comment">
              <p className="post-modal-comment-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="post-modal-comment-reply">Reply</p>
              <IoIosHeartEmpty className="post-modal-comment-heart" />
            </div>
          </div>
          <input
            className="post-modal-comment-input"
            placeholder="Add Comment"
          ></input>
        </div>
      
    </div>
  );
}
