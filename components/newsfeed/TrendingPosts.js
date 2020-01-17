import React from 'react';
import './TrendingPosts.scss'
import SmallCardHeader from '../postCard/SmallCardHeader';
import { IoIosTrendingUp } from "react-icons/io";
import MiniPostCard from '../postCard/MiniPostCard';

export default function TrendingPosts() {
    return (
        <div className="trending-posts">
             <SmallCardHeader title="Trending Posts" icon={<IoIosTrendingUp style={{width: "100%", height: "100%"}} />}/>
             <MiniPostCard />
             <MiniPostCard />
        </div>
    )
}
