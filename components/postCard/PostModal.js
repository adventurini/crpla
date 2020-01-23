import React, { useState } from "react";
import "./PostModal.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import SingleImage from "./postImage/SingleImage";
import UserAvatar from "../layout/UserAvatar";
import useOnclickOutside from 'react-cool-onclickoutside';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PreviousArrow, NextArrow} from '../carousel/Arrows'

export default function PostModal(props) {
  const { post, postModal, setPostModal } = props;
  const closeModal = useOnclickOutside(() => {
    setPostModal(false);
  });

  var settings = {
    dots: true,
    infinite: true,
    // prevArrow: <PreviousArrow />,
    // nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div key={post} className="post-modal" ref={closeModal}>
      <div className="post-modal-left">
     
        <div className="post-modal-image-container">
        <Slider {...settings} className="post-modal-slider">
      {post.url.map((image, i)=> {
        return(
        <div className="post-modal-image-container" key={i}>
 <img src={image} className="post-modal-image"></img>
 </div>)
      })}
         
          </Slider>
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
            <div className="post-modal-footer">
          {/* <div className="post-modal-attributes">
            <div className="post-modal-likes">
              <IoIosHeartEmpty className="post-modal-like-icon" />
              <p className="post-modal-number-of-likes">1.6k</p>
            </div>
            <div className="post-modal-comments">
              <FaRegComments className="post-modal-comments-icon" />
              <p className="post-modal-number-of-comments">127</p>
            </div>
          </div> */}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
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
