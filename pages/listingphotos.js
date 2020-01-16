import React from 'react'
import NavAuth from '../components/layout/NavAuth';
import StyledDropzone from "../components/layout/StyledDropzone"

export default function listingphotos() {
    return (
        <div>
            <NavAuth />
            {/* <StyledDropzone accept="image/jpeg, image/png" multiple={true} onDrop={([file]) => console.log(file)}/> */}
            <div className="drop-zone"></div>
        </div>
    )
}
