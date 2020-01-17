import React, {useState} from "react";
import "./CreatePost.scss";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import {FaRegImage, FaHome, FaRegSmile, FaHashtag} from "react-icons/fa";
import {GoMention} from "react-icons/go";
import FileUploader from './FileUploader';


export default function CreatePost() {

  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: '',
    media: []
  })


    const image= "https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512"

  return (
    <FileUploader noClick post={post} setPost={setPost} preview={preview} setPreview={setPreview}>
    <div className="create-post">
      <div className="create-post-top">
        <div className="create-post-user-avatar"><UserAvatar image={image} heigh="70px" width="70px"/></div>
        <input placeholder="Share something new..."></input>
      </div>
      <div className={`create-post-image-preview`}>
    {preview.length > 0 && preview.map(preview=> <img src={preview.preview} />)}
      </div>
      <div className="create-post-bottom">
          <div className="create-post-icons">
            <FileUploader post={post} setPost={setPost} preview={preview} setPreview={setPreview}>
        <FaRegImage className="create-post-icon image-icon"/>
        </FileUploader>
      <FaRegSmile className="create-post-icon smile-icon" />
      <GoMention className="create-post-icon mention" />
      <FaHome className="create-post-icon home" />

        
          </div>
          <div className="create-post-button"><Button text="Create Post"/></div>
      </div>
    </div>
    </FileUploader>
  );
}
