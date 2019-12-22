import React from "react";
import "./FeaturedHouses.scss";
import Link from 'next/link'

const houses = [
  {
    id: 0,
    address: "111-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  },
  {
    id: 1,
    address: "222-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  },
  {
    id: 2,
    address: "333-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  },
  {
    id: 3,
    address: "444-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  },
  {
    id: 4,
    address: "555-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  },
  {
    id: 5,
    address: "666-Jerome",
    apt_num: "",
    city: "Shelby Township",
    state: "MI"
  }
];

export default function FeaturedHouses() {
  return (
    <div className="featured-houses-container">
      <h3>Featured Photography</h3>
      <div className="featured-houses">
        {houses.length > 0 &&
          houses.map(house => (
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
                <Link href='/houses/[house.address]' as={`/houses/${house.address}`}>
                <button>View</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
