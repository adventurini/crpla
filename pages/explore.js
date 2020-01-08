import React from 'react'
import HousesFeed from '../components/feeds/HousesFeed'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'

export default function houses() {
    return (
        <div>
            <Nav />
            <HousesFeed />
            <Footer />
        </div>
    )
}
