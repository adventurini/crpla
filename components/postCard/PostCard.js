import React, {useState} from 'react';
import './PostCard.scss';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaRegComments, FaBluetooth } from "react-icons/fa"
import SingleImage from './postImage/SingleImage';
import DoubleImage from './postImage/DoubleImage';
import FourImage from './postImage/FourImage';
import FiveImage from './postImage/FiveImage';
import SixImage from './postImage/SixImage';
import UserAvatar from '../layout/UserAvatar';
import PostModal from './PostModal'


export default function PostCard(props) {

  const [postModal, setPostModal] = useState(false);


    const {post} = props
    return (
        <div key={post} className="post-card">
        <div className="post-card-content">
          <div className="post-card-title">
            <div className="post-card-user-avatar"><UserAvatar image={post.url} height="50px" width="50px"/></div>
            <div className="post-card-credentials">
              <p className="post-card-user-name">Anthony Venturini</p>
              <p className="post-card-time">2 hours ago</p>
            </div>
          </div>
          <p className="post-card-word-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="post-card-image-template" onClick={()=>setPostModal(true)}>
        {post.templateSelection === 1 ? <SingleImage post={post} /> : post.templateSelection === 2 ? <DoubleImage post={post} /> : post.templateSelection === 4 ? <FourImage post={post} /> : post.templateSelection === 5 ? <FiveImage post={post} /> : post.templateSelection === 6 ? <SixImage post={post} /> : null}
        </div>
        {postModal &&
        <div className="post-card-modal">
        <PostModal post={post} postModal={postModal} setPostModal={setPostModal}/>
        </div>
}
        <div className="post-card-footer">
            <div className="post-card-attributes">
                <div className="post-card-likes">
                  <IoIosHeartEmpty className="post-card-like-icon"/>
                    <p className="post-card-number-of-likes">1.6k</p>
                </div>
                <div className="post-card-comments">
                <FaRegComments className="post-card-comments-icon"/>
                    <p className="post-card-number-of-comments">127</p>
                </div>
         
            </div> 
            <div className="post-card-comment-section">
                <div className="post-card-comment-author-avatar"></div>
              <div className="post-card-comment-author">JDvento</div>
              <div className="post-card-comment">
                  <p className="post-card-comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 
                  </div>
          </div>
            <input className="post-card-comment-input" placeholder="Add Comment"></input>
        </div>
      </div>
    )
}
