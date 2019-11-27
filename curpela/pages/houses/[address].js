import React from 'react'
import HouseHeader from '../../components/houseProfile/HouseHeader'
import HouseSideBar from '../../components/houseProfile/HouseSideBar'
import HouseFeed from '../../components/houseProfile/HouseFeed'

export default function address(props) {
    return (
        <div>
            <h1>{props.address}</h1>
            <HouseHeader />
            <HouseSideBar />
            <HouseFeed />
        </div>
    )
}

address.getInitialProps = props => {
    console.log('hello')
    return {address: props.query.address}
}
