import React, { useState } from "react";
import dynamic from "next/dynamic";
import PostModal from '../postCard/PostModal'
import "./NewsFeedImages.scss";
import {posts} from '../../data';
import ImageCard from '../imageCard/ImageCard'

const CreatePost = dynamic(import ('../layout/CreatePost'),{ssr:false})


export default function NewsFeedImages({clicked, setClicked, setActivePostTab, active}) {
  
 

  return (
   
        <div className="news-feed-images-container">
         <CreatePost />
         
          <div className="news-feed-images">
            
            {posts.length > 0 &&
              posts.map(post => (
                <ImageCard post={post} />
            
              ))}
          </div>
        </div>
  );
}
