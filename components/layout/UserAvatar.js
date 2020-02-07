import React from 'react';
import './UserAvatar.scss'

export default function UserAvatar({image, width, height, border}) {
    console.log("image")
    return (
        <div className="user-avatar" style={{width, height, border}}>
            <img className="user-avatar-image" src={image ? image : "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}></img>
        </div>
    )
}
