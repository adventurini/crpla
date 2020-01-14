import React from "react";
import "./FiveImage.scss";

export default function FiveImage(props) {
  const { post } = props;

  return (
    <div className="five-image">
      <div className="left-column">
        <img src={post.url}></img>
      </div>
      <div className="right-column">
        <div className="right-column-top">
          <img src={post.url}></img> <img src={post.url}></img>
        </div>
        <div className="right-column-bottom">
          <img src={post.url}></img> <img className="overlay" src={post.url}></img>
        </div>
      </div>
    </div>
  );
}
