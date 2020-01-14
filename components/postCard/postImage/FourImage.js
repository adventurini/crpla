import React from "react";
import './FourImage.scss'

export default function FourImage(props) {
    const {post} = props

  return (
    <div className="four-image">
        <div className="four-image-row-top">   <img src={post.url}></img>
      <img src={post.url}></img> </div>

      <div className="four-image-row-bottom">
    <img src={post.url}></img>
      <img src={post.url}></img></div>
    </div>
  );
}
