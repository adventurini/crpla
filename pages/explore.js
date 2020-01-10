import React from 'react'
import HousesFeed from '../components/feeds/HousesFeed'
import Nav from '../components/layout/Nav'
import Footer from '../components/layout/Footer'
import NavAuth from '../components/layout/NavAuth'

export default function houses() {
    return (
        <div>
            <NavAuth />
            <HousesFeed />
            <Footer />
        </div>
    )
}
