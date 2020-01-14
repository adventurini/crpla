import React from 'react'
import PostCard from '../postCard/PostCard';
import './NewsFeedPosts.scss';
import {posts} from '../../data'

export default function NewsFeedPosts(props) {

    

    const {active, setActiveTab} = props

    return (
        <div className="news-feed-post-container">
        <div className="news-feed-posts-images-posts">
          <a
            className={active === "images" ? "bold" : ""}
            onClick={() => setActiveTab("images")}
          >
            Images
          </a>{" "}
          <a
            className={active === "posts" && "bold"}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </a>
        </div>
  
        <div className="news-feed-post-images">
          <input placeholder="Share something new"></input>
          {posts.length > 0 ?
            posts.map((post, i )=> (
              <PostCard post={post} key={i}/>
            )) : "Loading"}
        </div>
      </div>
    )
}
