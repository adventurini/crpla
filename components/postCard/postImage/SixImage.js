import React from "react";
import './SixImage.scss'

export default function SixImage(props) {
    const {post} = props

  return (
    <div className="six-image">
        <div className="six-image-row-top">
       <img src={post.url}></img>
      <img src={post.url}></img> <img src={post.url}></img>
      </div>
      <div className="six-image-row-bottom">
      <img src={post.url}></img> <img src={post.url}></img>
      <img src={post.url}></img>
      </div>
    </div>
  );
}
