import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "./ListingPost.scss";
import UserAvatar from "../../components/layout/UserAvatar";
import Button from "../layout/Button";
import { FaRegImage, FaHome, FaRegSmile, FaHashtag } from "react-icons/fa";
import { GoMention } from "react-icons/go";
import useOnclickOutside from "react-cool-onclickoutside";

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
          <UserAvatar image={image} height="40px" width="40px" />
        </div>
        <textarea
          className="listing-post-input"
          placeholder="Add a description or tag someone..."
        ></textarea>
      </div>

      <div className="listing-post-bottom">
        <div className="listing-post-icons">

          {emojiClick ? (
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
          <GoMention className="listing-post-icon mention" />
        </div>
       
      </div>
    </div>
  );
}
