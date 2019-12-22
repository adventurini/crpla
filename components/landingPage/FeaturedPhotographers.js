import React from 'react';
import './FeaturedPhotographers.scss'

const photographers = [0,1,2,3,4]

export default function FeaturedPhotographers() {
    return (
        <div className="featured-photographers-container">
            <h3>Featured Photographers</h3>
            <div className="featured-photographers">
            {photographers.length > 0 && photographers.map(photographer=> 
                <div className="featured-photographer">
                    <div className="avatar"></div>
                    <div className="photographer">
                    <p className="photographer-name">Anthony V</p>
                    <p className="photographer-handle">@AnthV</p>
                    </div>
                    <button>Follow</button>
              </div>
    )}
    </div>
    </div>
    )}
