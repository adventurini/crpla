import React from "react";
import './SixImage.scss'

export default function SixImage(props) {
    const {post} = props

  return (
    <div className="six-image">
        <div className="six-image-row-top">
       <img src={post.url[0]}></img>
      <img src={post.url[1]}></img> <img src={post.url[2]}></img>
      </div>
      <div className="six-image-row-bottom">
      <img src={post.url[3]}></img> <img src={post.url[4]}></img>
      <img src={post.url[5]}></img>
      </div>
    </div>
  );
}
