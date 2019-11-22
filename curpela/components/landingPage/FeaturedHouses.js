import React from 'react'
import './FeaturedHouses.scss'

const houses = [0,1,2,3,4,5]

export default function FeaturedHouses() {
    return (
        <div className="featured-houses-container">
            <h3>Featured Houses</h3>
            <div className="featured-houses">
            {houses.length > 0 && houses.map(house=> 
            
                <div className="featured-house">
                    <div className="house-image-section">
                    <img></img>
                    <p className="city">San Francisco, CA</p>
                    </div>
                    <div className="house-info-section">
                    <div className="house-info-author">
                        <div className="avatar"></div>
                        <div className="author-info">
                            <p className="author">John Venturini</p>
                            <p className="followers">2500 Followers</p>
                        </div>
                      
                    </div>
                    <div className="likes">
                            <img></img>
                            <p className="number-of-likes">2500</p>
                        </div>
                        <div className="comments">
                            <img></img>
                            <p className="number-of-comments">23</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
          
            )}
              </div>
        </div>
    )
}
