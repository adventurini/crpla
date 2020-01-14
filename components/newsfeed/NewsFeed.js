import React, {useState} from 'react';
import NewsFeedImages from './NewsFeedImages';
import NewsFeedSidebarLeft from './NewsFeedSidebarLeft';
import NewsFeedSidebarRight from './NewsFeedSidebarRight'

export default function NewsFeed() {

    const [activeTab, setActiveTab] = useState('feed')

    return (
        <div style={{display: 'flex', flexDirection: 'row', background: "#F2F3F7"}}>
            <NewsFeedSidebarLeft activeTab={activeTab} setActiveTab={setActiveTab} />
            <NewsFeedImages activeTab={activeTab} setActiveTab={setActiveTab} />
            <NewsFeedSidebarRight />
        </div>
    )
}
