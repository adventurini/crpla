import React from 'react';
import './SmallCardHeader.scss'

export default function SmallCardHeader({icon, title}) {
    return (
        <div className="small-card-header">
           <div className="small-card-header-icon">{icon}</div> 
           <h3 className="small-card-header-title">{title}</h3>
        </div>
    )
}
