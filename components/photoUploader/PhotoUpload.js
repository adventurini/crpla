import React, { useState } from "react";
import "./PhotoUpload.scss";
import { MdCloudUpload } from "react-icons/md";
import FileUploader from "../../components/layout/FileUploader";

export default function PhotoUpload() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });


  return (
    <div className="photo-upload">
      <FileUploader noClick preview={preview} setPreview={setPreview} post={post} setPost={setPost}>
        <h1 className="photo-upload-title">Add Listing Photos</h1>
        <div className="photo-upload-dnd-container">
          <MdCloudUpload className="photo-upload-icon" />
          <FileUploader preview={preview} post={post} setPost={setPost} setPreview={setPreview}>
          <div className="photo-upload-content-container">
            <p className="photo-upload-content">
              Drag & Drop files here <br /> or <br /> Click{" "}
              
                <span className="underline">here</span>
             {" "}
              to upload{" "}
            </p>
          </div>
          </FileUploader>
        </div>
      </FileUploader>
      <div className={`photo-upload-preview-image-container-hidden ${preview.length >
            0 && "photo-upload-preview-image-container-show"}`}>
               {preview.length > 0 &&
            preview.map((image, i) => (
              <>
                {i===0 ? (
                    <>
                <h2 className="photo-upload-preview-image-heading">Header Image</h2>
                  <img
                    className="photo-upload-preview-image-header"
                    key={i}
                    src={image.preview}
                  />
                  </>
                ) : (
                    
                  <img
                    className="photo-upload-preview-image"
                    key={i}
                    src={image.preview}
                  />
                ) }
              </>
            ))}
      </div>
    </div>
  );
}
