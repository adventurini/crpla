import React from "react";
import './FourImage.scss'

export default function FourImage(props) {
    const {post} = props

  return (
    <div className="four-image">
        <div className="four-image-row-top">   <img src={post.url[0]}></img>
      <img src={post.url[1]}></img> </div>

      <div className="four-image-row-bottom">
    <img src={post.url[2]}></img>
      <img src={post.url[3]}></img></div>
    </div>
  );
}
