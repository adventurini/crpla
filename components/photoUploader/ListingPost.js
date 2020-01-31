import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./ListingPost.scss";
import UserAvatar from "../../components/layout/UserAvatar";
import { FaRegImage, FaHome, FaRegSmile, FaHashtag } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import useOnclickOutside from "react-cool-onclickoutside";
import Button from '../../components/layout/Button'

const EmojiPicker = dynamic(import("../../components/icons/EmojiPicker"), {
  ssr: false
});

export default function ListingPost() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });

  const [emojiClick, setEmojiClick] = useState(false);

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const registerRef = useOnclickOutside(e => {
    if (e.target.nodeName !== "svg") {
      closeModal();
    }
  });

  const closeModal = () => {
    setEmojiClick(false);
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const fireEmojiPicker = e => {
    setEmojiClick(!emojiClick);
  };

  const image =
    "https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512";

  return (
    <div className="listing-post">
      <div className="listing-post-top">
        <div className="listing-post-user-avatar">
          <UserAvatar image={image} height="30px" width="30px" />
        </div>
        <textarea
          className="listing-post-input"
          placeholder="Add a description..."
        ></textarea>
      </div>

      <div className="listing-post-bottom">
        <div className="listing-post-icons">

          {/* {emojiClick ? (
            <FaRegSmile
              className="listing-post-icon smile-icon"
              style={{ color: "rgb(66, 43, 216)" }}
              onClick={closeModal}
            />
          ) : (
            <FaRegSmile
              className="listing-post-icon smile-icon"
              onClick={fireEmojiPicker}
            />
          )}

          {emojiClick && (
            <div
              ref={registerRef}
              style={{
                zIndex: 1,
                position: "absolute",
                left: "31%",
                top: "240px"
              }}
            >
              <EmojiPicker />
            </div>
          )}
          <GoMention className="listing-post-icon mention" /> */}
           <div className="listing-post-button">
              <Button
                text={<GoPlus style={{ width: "22px", height: "22px" }} />}
                padding="4px 2px"
                width="30px"
                height="30px"
                minWidth="30px"
               
              ></Button>
            </div>
        </div>
       
      </div>
    </div>
  );
}
