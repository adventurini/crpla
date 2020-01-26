import React from 'react';
import './Button.scss'

export default function Button({text, padding}) {
    return (
        
            <button className="main-button" style={{padding: `${padding}`}}>{text}</button>
       
    )
}
