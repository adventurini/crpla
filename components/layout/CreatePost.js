import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
import "./CreatePost.scss";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { FaRegImage, FaHome, FaRegSmile, FaHashtag } from "react-icons/fa";
import { GoMention } from "react-icons/go";
import FileUploader from "./FileUploader";
import useOnclickOutside from 'react-cool-onclickoutside';



const EmojiPicker = dynamic(import ('../../components/icons/EmojiPicker'),{ssr:false})


export default function CreatePost() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });

  const [emojiClick, setEmojiClick] = useState(false);

  const [chosenEmoji, setChosenEmoji] = useState(null);


  const registerRef = useOnclickOutside((e) => {
    if(e.target.nodeName !== "svg")
     {closeModal()}
  });

const closeModal = () => {
setEmojiClick(false)
}

    const onEmojiClick = (event, emojiObject) => {
     
        setChosenEmoji(emojiObject);
    }

    const fireEmojiPicker = (e) => {
      setEmojiClick(!emojiClick)
    }




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

            {emojiClick ? <FaRegSmile className="create-post-icon smile-icon" style={{color: "rgb(66, 43, 216)"}} onClick={closeModal}/> :
            <FaRegSmile className="create-post-icon smile-icon" onClick={fireEmojiPicker}/>}

            {emojiClick && (
              <div ref={registerRef}
                style={{
                  zIndex: 1, position: "absolute", left: "31%", top: "240px"
                }}
              >
                <EmojiPicker />
              </div>
            ) }
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
