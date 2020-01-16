import React from 'react';
import './Button.scss'

export default function Button({text}) {
    return (
        <div className="main-button">
            <button>{text}</button>
        </div>
    )
}
