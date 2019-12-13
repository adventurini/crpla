import React from "react";
import "./HouseCompliments.scss";

const compliments = [0, 1, 2, 3, 4, 5];

export default function HouseCompliments() {
  return (
    <div className="house-compliments">
      <div className="house-compliments-author">
        <div className="house-compliments-avatar"></div>
        <div className="compliments-author"></div>
      </div>
      <div className="compliment">  </div>
    </div>
  );
}
