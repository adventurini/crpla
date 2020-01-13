import React from 'react';
import NewsFeedImages from './NewsFeedImages';
import NewsFeedSidebarLeft from './NewsFeedSidebarLeft';
import NewsFeedSidebarRight from './NewsFeedSidebarRight'

export default function NewsFeed() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', background: "#F2F3F7"}}>
            <NewsFeedSidebarLeft />
            <NewsFeedImages />
            <NewsFeedSidebarRight />
        </div>
    )
}
