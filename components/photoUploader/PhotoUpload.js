import React, { useState } from "react";
import "./PhotoUpload.scss";
import { MdCloudUpload } from "react-icons/md";
import FileUploader from "../../components/layout/FileUploader";
import ImagePreviewModal from '../postCard/ImagePreviewModal'
import CurpelaWordLogo from '../../components/icons/CurpelaWordLogo'

export default function PhotoUpload() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });

  const [step, setStep] = useState(0)

  const fireModal = (i) => {
      setImageModal(true);
      setIndex(i)
  }

  const [imageModal, setImageModal] = useState(false);
  const [index, setIndex] = useState(0)


  return (
      <div className="photo-upload">
          {step === 0 ?
    <div className="photo-upload-container">
        
        <div className="photo-upload-content-container">
        
        
            <>
        <div className="photo-upload-logo">
         <CurpelaWordLogo fill="#483bda" width="320"/>
         </div>
        <form className="photo-upload-address-form" onSubmit={()=>setStep(1)}>
            
        <input className="photo-upload-address-input" placeholder="Enter Address"></input>
        <button className="photo-upload-address-submit">Next</button>
        </form>
        <p className="photo-upload-explainer">Welcome to our listing content generator. Please enter the listing address to continue.</p>
        </>
        </div>
        </div>
        :
       
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

}
      <div className={`photo-upload-preview-image-container-hidden ${preview.length >
            0 && "photo-upload-preview-image-container-show"}`}>
               {preview.length > 0 &&
            preview.map((image, i) => (
              <>
                {i===0 ? (
                    <>
                <h2 className="photo-upload-preview-image-heading">Header Image</h2>
                  <img
                  onClick={()=> fireModal(i)}
                    className="photo-upload-preview-image-header"
                    key={i}
                    src={image.preview}
                  />
                  </>
                ) : (
                    
                  <img
                  onClick={()=> fireModal(i)}
                    className="photo-upload-preview-image"
                    key={i}
                    src={image.preview}
                  />
                ) }
              </>
            ))}
            {  console.log(imageModal, index)
}
      </div>

      {imageModal && <ImagePreviewModal preview={preview} index={index} setImageModal={setImageModal} />}
      {imageModal && <div className="photo-upload-modal"></div>}
      
    </div>
  );
}
