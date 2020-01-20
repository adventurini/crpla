import React, { useState, useEffect } from "react";
import "./CreatePost.scss";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { FaRegImage, FaHome, FaRegSmile, FaHashtag } from "react-icons/fa";
import { GoMention } from "react-icons/go";
import FileUploader from "./FileUploader";
import EmojiPicker from '../../components/icons/EmojiPicker'

export default function CreatePost() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });

  const [emojiClick, setEmojiClick] = useState(false)


  // const [chosenEmoji, setChosenEmoji] = useState(null);

  //   const onEmojiClick = (event, emojiObject) => {
  //       setChosenEmoji(emojiObject);
  //   }

  const loadEmojiPicker = () => {
    {console.log(emojiClick)}
    setEmojiClick(!emojiClick)
  }
useEffect(()=> {
  window.onclick = (e) => {
    {console.log(e)}
    emojiClick && (e.target.className === "emoji-mart-emoji" || e.target.className === '' || e.target.className === "emoji-mart-category-list" || e.target.className === "emoji-mart-anchor" || e.target.className==="emoji-mart-preview" || e.target.className.baseVal ==='' || e.target.className ==='emoji-mart-preview-data' ? null : setEmojiClick(false))
  }
}
)

  const image =
    "https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512";

  return (
    <FileUploader
      noClick
      post={post}
      setPost={setPost}
      preview={preview}
      setPreview={setPreview}
    >
      <div className="create-post">
        <div className="create-post-top">
          <div className="create-post-user-avatar">
            <UserAvatar image={image} heigh="70px" width="70px" />
          </div>
          <input placeholder="Share something new..."></input>
        </div>

        <div className="create-post-bottom">
          <div className="create-post-icons">
            <FileUploader
              post={post}
              setPost={setPost}
              preview={preview}
              setPreview={setPreview}
            >
              <FaRegImage className="create-post-icon image-icon" />
            </FileUploader>
            <FaRegSmile className="create-post-icon smile-icon" onClick={loadEmojiPicker}/>
            {emojiClick && <div style={{zIndex:1}}className="create-post-emoji-picker"><EmojiPicker /></div>}
            <GoMention className="create-post-icon mention" />
            <FaHome className="create-post-icon home" />
          </div>
          <div className="create-post-button">
            <Button text="Create Post" />
          </div>
        </div>
        <div
          className={`create-post-preview-image-container-hidden ${preview.length >
            0 && "create-post-preview-image-container-show"}`}
        >
          {preview.length > 0 &&
            preview.map((image, i) => (
              <>
                {preview.length === 1 ? (
                  <img
                    className="create-post-preview-single-image"
                    key={i}
                    src={image.preview}
                  />
                ) : preview.length === 2 ? (
                  <img
                    className="create-post-preview-double-image"
                    key={i}
                    src={image.preview}
                  />
                ) : (
                  <img
                    className="create-post-preview-image"
                    key={i}
                    src={image.preview}
                  />
                )}
              </>
            ))}
        </div>
      </div>
    </FileUploader>
  );
}
