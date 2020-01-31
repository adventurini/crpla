import React from 'react'
import NavAuth from '../components/layout/NavAuth';
import PhotoUpload from '../components/photoUploader/PhotoUpload';
import SubmissionPage from '../components/photoUploader/SubmissionPage';

export default function photoupload() {
    return (
        <div className="photo-upload-page">
            <NavAuth />
            <SubmissionPage />
            {/* <StyledDropzone accept="image/jpeg, image/png" multiple={true} onDrop={([file]) => console.log(file)}/> */}
     
        </div>
    )
}
