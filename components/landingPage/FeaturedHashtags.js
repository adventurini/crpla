import React from "react";
import "./FeaturedHashtags.scss";

const hashtags = ["minimal", "beauty", "comfort", "style"];

export default function FeaturedHashtags() {
  return (
    <div className="featured-hashtags">
      <h3>Popular</h3>
      <div className="featured-hashtags-container">
        {hashtags.map((hashtag, i) => (
          <div className="featured-hashtag">
            <p className="hashtag">#{hashtag}</p>
            <div className="top-flex-container">
            <div className="hashtag-top-left"></div>
            <div className="hashtag-top-right"></div>
            </div>
            <div className="bottom-flex-container">
            <div className="hashtag-bottom-left"></div>
            <div className="hashtag-bottom-right"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
