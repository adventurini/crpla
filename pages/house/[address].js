import React from 'react'
import HouseHeader from '../../components/houseProfile/HouseHeader'
import HouseSideBar from '../../components/houseProfile/HouseSideBar'
import HouseImages from '../../components/houseProfile/HouseImages'
import NavAuth from '../../components/layout/NavAuth';

export default function address(props) {
    return (
        <div className="address-container" style={{backgroundColor: "#F2F3F7"}}>
            <NavAuth />
            <HouseHeader />
            <div style={{display: "flex"}}>
            <HouseSideBar/>
            <HouseImages />
            </div>
        </div>
    )
}

address.getInitialProps = props => {
    return {address: props.query.address}
}
