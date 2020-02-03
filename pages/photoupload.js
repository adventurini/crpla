import React from 'react'
import NavAuth from '../components/layout/NavAuth';
import PhotoUpload from '../components/photoUploader/PhotoUpload';

export default function photoupload() {
    return (
        <div className="photo-upload-page">
            <NavAuth />
            <PhotoUpload />
            {/* <StyledDropzone accept="image/jpeg, image/png" multiple={true} onDrop={([file]) => console.log(file)}/> */}
     
        </div>
    )
}
