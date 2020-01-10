import React from "react";
import "./UserProfileCard.scss";

const user_images = [
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1509119891769-8c8648bc3a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  "https://images.unsplash.com/photo-1515095182805-4367ad159fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1509119891769-8c8648bc3a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

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
          <p>
            {`${profile.firstName} ${profile.lastName}`} <br /> @{`${profile.username}`}
          </p>
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
          <p className="about-description">
            Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </div>
      <div className="user-images-section">
        <div className="user-images-title">
          <img className="user-images-icon" src=""></img>
          <p className="title">Images(23)</p>
          <p className="view-all">View All</p>
          <img className="view-all-icon" src=""></img>
        </div>
        <div className="user-images">
          {user_images.map(image => (
            <div className="user-photo">
              <img src={image}></img>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="house-compliments-section">

          <HouseCompliments />
        </div> */}
    </div>
  );
}
