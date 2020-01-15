import React from 'react';
import './UserAvatar.scss'

export default function UserAvatar({image}) {
    return (
        <div className="user-avatar">
            <img src={image}></img>
        </div>
    )
}
