import React from 'react'
import HouseHeader from '../../components/houseProfile/HouseHeader'
import HouseSideBar from '../../components/houseProfile/HouseSideBar'
import HouseFeed from '../../components/houseProfile/HouseFeed'
import Nav from '../../components/layout/Nav'

export default function address(props) {
    return (
        <div>
            <Nav />
            <HouseHeader />
            <HouseSideBar />
            <HouseFeed />
        </div>
    )
}

address.getInitialProps = props => {
    return {address: props.query.address}
}
