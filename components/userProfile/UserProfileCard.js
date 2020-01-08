import React from 'react';
import './UserProfileCard.scss'

const user_images = [0, 1, 2, 3, 4, 5];

export default function userProfileCard() {
    return (
      <>
        <div className="user-card">
          <div className="user-header-image"></div>
        <div className="user-avatar"></div>
        <div className="user-info">
            <p>Anthony Venturini <br /> @adventurini</p>
        </div>
        <button>Follow</button>
        <div className="user-attributes">
          <div className="user-followers">
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
          </div>
        <div className="user-images-section">
          <div className="user-images-title">
            <img className="user-images-icon" src=""></img>
            <p className='title'>Images(23)</p>
            <p className="view-all">View All</p>
            <img className="view-all-icon" src=""></img>
          </div>
          <div className="user-images">
            {user_images.map(image => (
              <div className="user-photo"></div>
            ))}
          </div>
        </div>
        {/* <div className="house-compliments-section">
        
          <HouseCompliments />
        </div> */}
      
      </>
    )
}
