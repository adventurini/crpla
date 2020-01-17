import React from 'react';
import './UserAvatar.scss'

export default function UserAvatar({image, width, height}) {
    return (
        <div className="user-avatar" style={{width, height}}>
            <img className="user-avatar-image" src={image} style={{width, height}}></img>
        </div>
    )
}
