import React from 'react'
import FeaturedHouses from '../landingPage/FeaturedHouses'
import FeaturedPhotographers from '../landingPage/FeaturedPhotographers'
import FeaturedHashtags from '../landingPage/FeaturedHashtags'

export default function HousesFeed() {
    return (
        <div>
            <FeaturedHashtags />
            <FeaturedPhotographers />
            <FeaturedHouses/>
        </div>
    )
}
