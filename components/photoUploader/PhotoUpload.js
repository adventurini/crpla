import React, { useState } from "react";
import "./PhotoUpload.scss";
import { MdCloudUpload } from "react-icons/md";
import FileUploader from "../../components/layout/FileUploader";
import ImagePreviewModal from "../postCard/ImagePreviewModal";
import CurpelaWordLogo from "../../components/icons/CurpelaWordLogo";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import Button from "../layout/Button";
import { TiDelete } from "react-icons/ti";
import ListingPost from "./ListingPost";
import {GoPlus} from 'react-icons/go'

const SortableImagessContainer = sortableContainer(({ children, preview }) => (
  <div
    className={`photo-upload-preview-image-container-hidden ${preview.length >
      0 && "photo-upload-preview-image-container-show"}`}
  >
    {console.log("container")}

    {children}
  </div>
));

const SortableImage = sortableElement(props => {
  const { image, fireModal, index } = props;
  return (
    <img
      onClick={() => fireModal(index)}
      className="photo-upload-preview-image sortableHelper"
      key={index}
      src={image.preview}
    />
  );
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

  const addVideoURL = (e, num) => {
    e.preventDefault();
    setVideoURL(videoURL => [...videoURL, e.target.value])
  }

  console.log(post, preview)


  const onSortEnd = ({ oldIndex, newIndex }) =>
    setPreview(arrayMove(preview, oldIndex, newIndex));

  return (
    <div className="photo-upload">
      {step === 0 ? (
        <div className="photo-upload-container">
          <div className="photo-upload-content-container">
            <>
              <div className="photo-upload-logo">
                <CurpelaWordLogo fill="#483bda" width="200" />
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
              <h1
                className={`photo-upload-title`}
              >
                Listing Generator
              </h1>
              <div className="photo-upload-dnd-container">
                <FileUploader
                  preview={preview}
                  post={post}
                  setPost={setPost}
                  setPreview={setPreview}
                >
                  <div className="photo-upload-icon-container">
                    <MdCloudUpload className="photo-upload-icon" />
                  </div>
                  <div
                    className={`photo-upload-content-container ${preview.length > 0
                       && "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      Drag & Drop photos here <br /> or <br /> Click{" "}
                      <span className="underline">here</span> to upload{" "}
                    </p>
                  </div>
                  <div
                    className={`photo-upload-content-container ${(step >=
                      2 || preview.length < 1) && "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      Drag images to change photo order or click images to
                      preview. <br />Upload more images{" "}
                      <span className="underline">here</span>.
                    </p>
                  </div>
                  <div
                    className={`photo-upload-content-container ${step !==
                      2 && "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      If you have any videos or 3D tours, add the URL(s) below. <br /> Click Submit to generate a listing page.
                    </p>
                  </div>
               
                </FileUploader>
                {step === 1 ?
                <div
                  className={`photo-upload-content-container-hidden ${preview.length >
                    0 && "photo-upload-submit-button"}`}
                  onClick={() => setStep(2)}
                >
                  <Button text="Next Step" padding="12px 16px"></Button>
                </div>
                : 
                <div
                  className={`photo-upload-content-container-hidden ${preview.length >
                    0 && "photo-upload-submit-button"}`}
                  onClick={() => console.log("hello")}
                >
                  <Button text="Submit" padding="12px 16px"></Button>
                </div>
           
}
              </div>
            </div>
          </FileUploader>
          {step === 2 && 
          <form className="photo-upload-video-URL">
          <input placeholder="Add video or 3D tour URL" className="photo-upload-video-URL-input"></input>
          <div className="photo-upload-video-URL-button" onClick={(e)=> addVideoURL(e)}>
          <Button text={<GoPlus style={{width: "22px", height: "22px"}}/>} padding="12px 16px" width="50px" height="46px" minWidth= "50px"></Button>
          </div>
          </form>
          }
          {preview.length > 0 && (
            <SortableImagessContainer
              distance={1}
              axis="xy"
              onSortEnd={onSortEnd}
              preview={preview}
              
            >
              <h2 className="photo-upload-preview-image-heading">
                Header Image
              </h2>
              {preview.map((image, index) => {
                return (
                  <>
                  {image.type.includes("video") ?
                 null
              
                  :
                  
                  <SortableImage
                    image={image}
                    fireModal={() => fireModal(index)}
                    index={index}
                    key={index}
                  />
                }
                  </>
                );
              })}
            </SortableImagessContainer>
          )}

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
        </>
      )}
    </div>
  );
}
