import React, {useState} from 'react';
import NewsFeedImages from './NewsFeedImages';
import NewsFeedSidebarLeft from './NewsFeedSidebarLeft';
import NewsFeedSidebarRight from './NewsFeedSidebarRight';
import './NewsFeed.scss'
import NewsFeedPosts from './NewsFeedPosts';

export default function NewsFeed() {
    const [active, setActive] = useState("posts");
    const [activeTab, setActiveTab] = useState('feed')
    const [clicked, setClicked] = useState('false')

    const overlay = {
        display: "flex",
        filter: 'brightness(50%)',
        backdropFilter: 'brightness(95%)',
        zIndex: 15
      }

      const noOverlay = {
        display: "flex",
        flexDirection: "row",
        background: "#F2F3F7"
      }
      
      const setActivePostTab = (tab) => {
        tab === 'images' ? setActive('images') : setActive('posts')
      }

    return (
        <div style={noOverlay}>
            {console.log('newsfeed', clicked)}
            <NewsFeedSidebarLeft activeTab={activeTab} setActiveTab={setActiveTab} />
            {active === "images"? 
            <NewsFeedImages clicked={clicked} active={active} setActivePostTab={setActivePostTab} setClicked={setClicked} activeTab={activeTab} setActiveTab={setActiveTab} />
            :
            <NewsFeedPosts clicked={clicked} setClicked={setClicked} active={active} setActive={setActive} setActivePostTab={setActivePostTab}/>}
            <NewsFeedSidebarRight />
        </div>
    )

  
}
