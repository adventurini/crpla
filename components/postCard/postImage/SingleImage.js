import React from "react";
import './SingleImage.scss'

export default function SingleImage(props) {
    const {post} = props

  return (
    <div className="single-image">
      <img src={post.url[0]}></img>
    </div>
  );
}
