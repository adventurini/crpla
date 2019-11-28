import React from 'react'

const compliments = [0,1,2]

export default function HouseCompliments() {
    return (
        <div className="house-compliments">
            <div className="house-compliments-author">
            <div className="house-compliments-avatar"></div>
            <div className="compliments-author"></div>
            </div>
            {compliments.map(compliment => <div className="compliment">{compliment}</div>)}
            
            <input placeholder="Type your compliment"></input>
            
        </div>
    )
}
