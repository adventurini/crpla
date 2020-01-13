import React from 'react';
import './NewsFeedSidebarLeft.scss'
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";



export default function NewsFeedSidebarLeft() {
    return (
        <div className='side-bar-left'>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
            <IoIosHeartEmpty className='side-bar-icon'/> <a>Profile</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
            <IoIosHeartEmpty className='side-bar-icon'/> <a>Trending</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
            <IoIosHeartEmpty className='side-bar-icon'/> <a>Houses</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
            <IoIosHeartEmpty className='side-bar-icon'/> <a>Lorem</a>
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '8px'}}>
            <IoIosHeartEmpty className='side-bar-icon'/> <a>Ipsum</a>
            </div>
        </div>
    )
}
