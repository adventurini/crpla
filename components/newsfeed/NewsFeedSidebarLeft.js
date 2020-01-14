import React from 'react';
import Link from 'next/link'
import './NewsFeedSidebarLeft.scss'
import { FiUser } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md"; 




export default function NewsFeedSidebarLeft(props) {

    const {activeTab, setActiveTab} = props
    
    return (
        <div className='side-bar-left'>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <MdRssFeed className='side-bar-icon' /> <a className={activeTab === 'feed' ? "bold" : ''} onClick={() => setActiveTab('feed')}>Feed</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <FiUser className='side-bar-icon' /> <Link href="/user/adventurini"><a>Profile</a></Link>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <IoIosTrendingUp className='side-bar-icon' /> <a className={activeTab === 'trending' ? "bold" : ''} onClick={() => setActiveTab('trending')}>Trending</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
            <FaHome className='side-bar-icon'/> <a className={activeTab === 'listings' ? "bold" : ''} onClick={() => setActiveTab('listings')}>Listings</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
                <Link href="/listingphotos">
            <button>Upload Listing Photos</button></Link>
            </div>
        </div>
    )
}
