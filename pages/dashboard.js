import React from 'react'
import ListingDashboard from '../components/dashboards/ListingDashboard'
import NavAuth from '../components/layout/NavAuth'

export default function dashboard() {
    return (
        <div>
            <NavAuth />
            <ListingDashboard />
        </div>
    )
}
