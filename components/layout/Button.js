import React from 'react';
import './Button.scss'

export default function Button({text, padding, width, margin}) {
    return (
        
            <button className="main-button" style={{padding: `${padding}`, maxWidth: `${width}`, margin: `${margin}`}}>{text}</button>
       
    )
}
