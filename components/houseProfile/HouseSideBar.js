import React from "react";
import HouseCompliments from './HouseCompliments'
import "./HouseSideBar.scss";

const house_images = [0, 1, 2, 3, 4, 5];


export default function HouseSideBar() {
  return (
    <div className="sidebar">
      <div className="house-image"></div>
      <div className="house-info">
          <p>48592 Jerome <br /> Shelby Twp., MI 48315</p>
      </div>
      <button>Follow</button>
      <div className="house-attributes">
        <div className="followers">
        <p className="number-of-followers">25</p>
        <p className="followers-title">Followers</p>
        </div>
        <div className="posts">
        <p className="number-of-posts">22</p>
        <p className="posts-title">Posts</p>
        </div>
        <div className="compliments">
        <p className="number-of-compliments">222</p>
        <p className="compliments-title">Compliments</p>
        </div>
        </div>
        <div className="about">
        <p className="about-title">ABOUT</p>
        <p className="about-description">Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
     
      <div className="house-images-section">
        <div className="house-images-title">
          <img className="house-images-icon" src=""></img>
          <p className='title'>Images(23)</p>
          <p className="view-all">View All</p>
          <img className="view-all-icon" src=""></img>
        </div>
        <div className="house-images">
          {house_images.map(image => (
            <div className="house-photo"></div>
          ))}
        </div>
      </div>
      {/* <div className="house-compliments-section">
      
        <HouseCompliments />
      </div> */}
    </div>
  );
}
