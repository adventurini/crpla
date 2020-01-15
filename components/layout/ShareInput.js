import React from "react";
import "./ShareInput.scss";
import UserAvatar from "./UserAvatar";

export default function ShareInput() {

    const image= "https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512"

  return (
    <div className="share-input">
      <div className="share-input-top">
        <div className="share-input-user-avatar"><UserAvatar image={image}/></div>
        <input placeholder="Share something new..."></input>
      </div>
      <div className="share-input-bottom"></div>
    </div>
  );
}
