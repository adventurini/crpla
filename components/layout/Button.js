import React from 'react';
import './Button.scss'

export default function Button({borderBottomLeftRadius, borderTopLeftRadius, background, text, height, padding, width, margin, minWidth, borderRadius}) {
    return (
        
            <button className="main-button" style={{padding: `${padding}`, height: `${height}`,minWidth: `${minWidth}`, maxWidth: `${width}`, width: `${width}`, margin: `${margin}`, background: `${background}`, borderTopLeftRadius: `${borderTopLeftRadius}`, borderRadius: `${borderRadius}`,
            borderBottomLeftRadius: `${borderBottomLeftRadius}` }}>{text}</button>
       
    )
}
