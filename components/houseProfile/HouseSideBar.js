import React from "react";
import HouseCompliments from './HouseCompliments'
import "./HouseSideBar.scss";

const house_images = ["https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
"https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1509119891769-8c8648bc3a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
"https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
"https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"];


export default function HouseSideBar() {
  return (
    <div className="sidebar">
      <div className="house-image">
        <img src={"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}></img>
      </div>
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
          {/* <p className="view-all">View All</p> */}
          <img className="view-all-icon" src=""></img>
        </div>
        <div className="house-images">
          {house_images.map(image => (
            <img src={image} className="house-photo"></img>
          ))}
        </div>
      </div>
      {/* <div className="house-compliments-section">
      
        <HouseCompliments />
      </div> */}
    </div>
  );
}
