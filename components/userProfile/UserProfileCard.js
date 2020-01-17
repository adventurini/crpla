import React from "react";
import "./UserProfileCard.scss";
import {posts} from '../../data'

export default function userProfileCard({ profile }) {
  return (
    <div className="userProfileCard">
      <div className="user-card">
        <div className="user-header-image"></div>
        <img
          className="user-avatar"
          src="https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512"
          alt="Profile Picture"
        />
        <div className="user-info">
          <p className="profile-name">
            {`${profile.firstName} ${profile.lastName}`} 
           
          </p> 
          <p className="profile-profession"> Real Estate Photographer </p>
          <p className="profile-username"> @{`${profile.username}`} </p>
        </div>
        <button>Follow</button>
        <div className="user-attributes">
          <div className="user-followers">
            <p className="number-of-followers">{profile.followerCount}</p>
            <p className="followers-title">Followers</p>
          </div>
          <div className="compliments">
            <p className="number-of-compliments">{profile.followingCount}</p>
            <p className="compliments-title">Following</p>
          </div>
          <div className="posts">
            <p className="number-of-posts">{profile.postCount}</p>
            <p className="posts-title">Posts</p>
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
            <p className='title'>Images (23)</p>
            {/* <p className="view-all">View All</p> */}
            <img className="view-all-icon" src=""></img>
          </div>
          <div className="user-images">
            {posts.map(image => (
              <div className="user-photo">
                <img src={image.url}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
