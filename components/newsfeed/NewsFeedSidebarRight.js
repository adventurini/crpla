import React from 'react';
import './NewsFeedSidebarRight.scss'
import PopularHashtags from './PopularHashtags';
import TrendingPosts from './TrendingPosts';
import PopularProfiles from './PopularProfiles';

export default function NewsFeedSidebarRight() {
    return (
        <div className='side-bar-right'>
           <PopularProfiles />
         <TrendingPosts />
       
         <PopularHashtags />
        </div>
    )
}
