import React, {useState} from 'react';
import './PhotoUpload.scss';
import {MdCloudUpload} from 'react-icons/md'

export default function PhotoUpload() {

    const [preview, setPreview] = useState([])

    return (
        <div className="photo-upload">
            <h1 className="photo-upload-title">Add Listing Photos</h1>
            <div className="photo-upload-dnd-container">
                <MdCloudUpload className='photo-upload-icon'/>
                <div className="photo-upload-content-container">
                    <p className="photo-upload-content">Drag & Drop files here <br /> or <br /> Click <span className ="underline">here</span> to upload </p>
                </div>
            </div>
            <div className="photo-upload-preview-container">

                {preview.length > 0 &&

                preview.map(image => {
                    <img src={image} className="photo-upload-preview-image"></img>
                })
            
}
            </div>
        </div>
    )
}
