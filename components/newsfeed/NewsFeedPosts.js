import React from 'react'
import PostCard from '../postCard/PostCard';
import './NewsFeedPosts.scss';
import {posts} from '../../data'
import CreatePost from '../layout/CreatePost';

export default function NewsFeedPosts({active, setActivePostTab, clicked, setClicked}) {


    return (
        <div className="news-feed-post-container">
        
      <CreatePost />
          {posts.length > 0 ?
            posts.map((post, i )=> (
              <PostCard post={post} key={i}/>
            )) : "Loading"}
        
      </div>
    )
}
