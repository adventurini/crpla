import React from 'react';
import './PopularHashtags.scss'
import SmallCardHeader from '../postCard/SmallCardHeader';
import {FaHashtag} from "react-icons/fa"

const hashtags = ["minimal", "classic", "modern", "black", "blue","white"]

export default function PopularHashtags() {
    return (
        <div className="popular-hashtags">
            <SmallCardHeader title="Popular Hashtags" icon={<FaHashtag style={{width: "100%", height: "100%"}} />}/>
            <div className="popular-hashtags-content">
                {hashtags.map(hashtag => 
                    <div className="popular-hashtags-hashtag">
                        <p>#{hashtag}</p>
                        </div>
                    )}
            </div>
        </div>
    )
}
