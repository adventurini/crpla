import React, { useState } from "react";
import "./PhotoUpload.scss";
import { MdCloudUpload } from "react-icons/md";
import FileUploader from "../../components/layout/FileUploader";
import ImagePreviewModal from "../postCard/ImagePreviewModal";
import CurpelaWordLogo from "../../components/icons/CurpelaWordLogo";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableImagessContainer = sortableContainer(({ children, preview }) => (
  <div
    className={`photo-upload-preview-image-container-hidden ${preview.length >
      0 && "photo-upload-preview-image-container-show"}`}
  >{console.log("container")}
    {children}
  </div>
));

const SortableImage = sortableElement((props) => {
  
  const {image, fireModal, index} = props
  return(
  <img
      onClick={() => fireModal(index)}
      className="photo-upload-preview-image"
      key={index}
      src={image.preview}
    />)
    
  // return(
  // imageIndex === 0 ? (
      
  //     <img
  //       onClick={() => fireModal(imageIndex)}
  //       className="photo-upload-preview-image-header"
  //       key={imageIndex}
  //       src={image.preview}
  //     />
  // ) : (
  //   <img
  //     onClick={() => fireModal(imageIndex)}
  //     className="photo-upload-preview-image"
  //     key={imageIndex}
  //     src={image.preview}
  //   />
  // ))
});

export default function PhotoUpload() {
  const [preview, setPreview] = useState([]);
  const [post, setPost] = useState({
    text: "",
    media: []
  });
  const [step, setStep] = useState(0);
  const [imageModal, setImageModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);


  
  const fireModal = index => {
    setImageModal(true);
    setModalIndex(index);
  };
  
  const onSortEnd = ({ oldIndex, newIndex }) =>
    setPreview(arrayMove(preview, oldIndex, newIndex));

  return (
    <div className="photo-upload">
      {step === 0 ? (
        <div className="photo-upload-container">
          <div className="photo-upload-content-container">
            <>
              <div className="photo-upload-logo">
                <CurpelaWordLogo fill="#483bda" width="240" />
              </div>
              <form
                className="photo-upload-address-form"
                onSubmit={() => setStep(1)}
              >
                <input
                  className="photo-upload-address-input"
                  placeholder="Enter Address"
                ></input>
                <button className="photo-upload-address-submit">Next</button>
              </form>
              <p className="photo-upload-explainer">
                Welcome to our listing content generator. Please enter the
                listing address to continue.
              </p>
            </>
          </div>
        </div>
      ) : (
        <>

        <FileUploader
          noClick
          preview={preview}
          setPreview={setPreview}
          post={post}
          setPost={setPost}
        >
          <div className="photo-upload-dnd">
            <h1 className="photo-upload-title">Add Listing Photos</h1>
            <div className="photo-upload-dnd-container">
              <MdCloudUpload className="photo-upload-icon" />
              <FileUploader
                preview={preview}
                post={post}
                setPost={setPost}
                setPreview={setPreview}
              >
                <div className="photo-upload-content-container">
                  <p className="photo-upload-content">
                    Drag & Drop photos here <br /> or <br /> Click{" "}
                    <span className="underline">here</span> to upload{" "}
                  </p>
                </div>
              </FileUploader>
            </div>
          </div>
        </FileUploader>
        </>
      )}

        {preview.length > 0 &&
      <SortableImagessContainer distance={1} axis="xy" onSortEnd={onSortEnd} preview={preview}>
        <h2 className="photo-upload-preview-image-heading">Header Image</h2>
         {preview.map((image, index) => {
                return(
            <SortableImage image={image} fireModal={()=>fireModal(index)} index={index} key={index}/>
            )})}
      </SortableImagessContainer>
          }

      {imageModal && (
        <ImagePreviewModal
          setPreview={setPreview}
          preview={preview}
          index={modalIndex}
          setIndex={setModalIndex}
          setImageModal={setImageModal}
        />
      )}
      {imageModal && <div className="photo-upload-modal"></div>}
    </div>
  );
}
