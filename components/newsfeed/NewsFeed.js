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


      const noOverlay = {
        display: "flex",
        background: "#F2F3F7",
        maxWidth: "1200px",
        margin: "0 auto"      }
      
      const setActivePostTab = (tab) => {
        tab === 'images' ? setActive('images') : setActive('posts')
      }

    return (
        <div style={noOverlay}>
            <NewsFeedSidebarLeft activeTab={activeTab} setActiveTab={setActiveTab} />
            {active === "images"? 
            <NewsFeedImages clicked={clicked} active={active} setActivePostTab={setActivePostTab} setClicked={setClicked} activeTab={activeTab} setActiveTab={setActiveTab} />
            :
            <NewsFeedPosts clicked={clicked} setClicked={setClicked} active={active} setActive={setActive} setActivePostTab={setActivePostTab}/>}
            <NewsFeedSidebarRight />
        </div>
    )

  
}
