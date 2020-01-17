import React from 'react';
import './PostCard.scss';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments } from "react-icons/fa"
import SingleImage from './postImage/SingleImage';
import DoubleImage from './postImage/DoubleImage';
import FourImage from './postImage/FourImage';
import FiveImage from './postImage/FiveImage';
import SixImage from './postImage/SixImage';
import UserAvatar from '../layout/UserAvatar';


export default function PostCard(props) {

    const {post} = props
    return (
        <div key={post} className="post">
        <div className="post-content">
          <div className="post-title">
            <div className="post-user-avatar"><UserAvatar image={post.url} height="50px" width="50px"/></div>
            <div className="post-credentials">
              <p className="post-user-name">Anthony Venturini</p>
              <p className="post-time">2 hours ago</p>
            </div>
          </div>
          <p className="post-word-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {post.templateSelection === 1 ? <SingleImage post={post} /> : post.templateSelection === 2 ? <DoubleImage post={post} /> : post.templateSelection === 4 ? <FourImage post={post} /> : post.templateSelection === 5 ? <FiveImage post={post} /> : post.templateSelection === 6 ? <SixImage post={post} /> : null}
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
              <div className="comment">
                  <p className="comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p className="comment-reply">Reply</p>
                  <IoIosHeartEmpty className="comment-heart"/>
                  </div>
          </div>
            <input className="comment-input" placeholder="Add Comment"></input>
        </div>
      </div>
    )
}
