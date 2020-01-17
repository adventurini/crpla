import React from 'react';
import './FeaturedPhotographers.scss';
import Link from 'next/link'

const users = [{
    firstName: "Anthony",
    lastName: "Venturini",
    username: "adventurini",
    photographer: false,
    profilePicture: 'https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512'
}]

export default function FeaturedPhotographers() {
    return (
        <div className="featured-photographers-container">
            <h3>Featured Photographers</h3>
            <div className="featured-photographers">
            {users.length > 0 && users.map(user=> 
                <div className="featured-photographer">
                    <div className="avatar"></div>
                    <div className="photographer">
                    <p className="photographer-name">Anthony V</p>
                    <p className="photographer-handle">@AnthV</p>
                    </div>
                    <Link href="/user/[username]" as={`/user/${user.username}`}>
                    <button>Follow</button></Link>
              </div>
    )}
    </div>
    </div>
    )}
