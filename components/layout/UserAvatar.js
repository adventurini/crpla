import React from 'react';
import './UserAvatar.scss'

export default function UserAvatar({image, width, height}) {
    return (
        <div className="user-avatar" style={{width: {width}, height: {height}}}>
            <img src={image} ></img>
        </div>
    )
}
