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
import { GoPlus } from "react-icons/go";
import Iframe from "react-iframe";
import dynamic from "next/dynamic";
import SubmissionPage from "./SubmissionPage";
const AddressInput = dynamic(import("./AddressInput"), { ssr: false });

const SortableImagesContainer = sortableContainer(({ children, preview }) => (
  <div
    className={`photo-upload-preview-image-container-hidden ${preview.length >
      0 && "photo-upload-preview-image-container-show"}`}
  >
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

const SortableVideosContainer = sortableContainer(
  ({ children, videoArray }) => (
    <div
      className={`photo-upload-preview-image-container-hidden ${videoArray.length >
        0 && "photo-upload-preview-image-container-show"}`}
    >
      {children}
    </div>
  )
);

const SortableVideo = sortableElement(props => {
  const { video, index } = props;
  console.log(video.id);
  return (
    <Iframe
      className="photo-upload-preview-video sortableHelper"
      key={index}
      width="450px"
      height="450px"
      url={
        video.URL.includes("youtube")
          ? `https://www.youtube.com/embed/${video.id}`
          : video.URL
      }
      allowFullScreen
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
  const [video, setVideo] = useState({
    URL: "",
    id: ""
  });
  const [videoArray, setVideoArray] = useState([]);

  const handleChange = e => {
    e.persist();
    setVideo({ URL: e.target.value });
  };

  const fireModal = index => {
    setImageModal(true);
    setModalIndex(index);
  };

  const addVideo = (e, num) => {
    video.id = video.URL.split("=")[1];
    console.log(video.URL, video.id, video);
    e.preventDefault();
    setVideoArray(x => [...x, video]);
    setVideo({ URL: "", id: "" });
  };
  console.log(videoArray);

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
                <AddressInput
                  className="photo-upload-address-input"
                  placeholder="Enter Address"
                ></AddressInput>
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
            <div
              className={`photo-upload-dnd ${step >= 3 &&
                "photo-upload-content-container-hidden"}`}
            >
              <h1 className={`photo-upload-title`}>Listing Generator</h1>
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
                    className={`photo-upload-content-container ${preview.length >
                      0 && "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      Drag & Drop photos here <br /> or <br /> Click{" "}
                      <span className="underline">here</span> to upload{" "}
                    </p>
                  </div>
                  <div
                    className={`photo-upload-content-container ${(step >= 2 ||
                      preview.length < 1) &&
                      "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      Drag images to change photo order or click images to
                      preview. <br />
                      Upload more images <span className="underline">here</span>
                      .
                    </p>
                  </div>
                  <div
                    className={`photo-upload-content-container ${step !== 2 &&
                      "photo-upload-content-container-hidden"}`}
                  >
                    <p className="photo-upload-content">
                      If you have any videos or 3D tours, add the URL(s) below.{" "}
                      <br /> Click Submit to generate a listing page.
                    </p>
                  </div>
                </FileUploader>
                {step === 1 ? (
                  <div
                    className={`photo-upload-content-container-hidden ${preview.length >
                      0 && "photo-upload-submit-button"}`}
                    onClick={() => setStep(2)}
                  >
                    <Button text="Next Step" padding="12px 16px"></Button>
                  </div>
                ) : (
                  <div
                    className={`photo-upload-content-container-hidden ${preview.length >
                      0 && "photo-upload-submit-button"}`}
                    onClick={() => setStep(3)}
                  >
                    <Button text="Submit" padding="12px 16px"></Button>
                  </div>
                )}
              </div>
            </div>
          </FileUploader>
          {step === 2 && (
            <form className="photo-upload-video-URL">
              <input
                placeholder="Add video or 3D tour URL"
                value={video.URL}
                onChange={e => handleChange(e)}
                className="photo-upload-video-URL-input"
              ></input>
              <div
                className="photo-upload-video-URL-button"
                onClick={e => addVideo(e)}
              >
                <Button
                  text={<GoPlus style={{ width: "22px", height: "22px" }} />}
                  padding="12px 16px"
                  width="50px"
                  height="46px"
                  minWidth="50px"
                  borderTopLeftRadius= "0px"
                  borderBottomLeftRadius= "0px"
                ></Button>
              </div>
            </form>
          )}
          {videoArray.length > 0 && step < 3 && (
            <SortableVideosContainer
              distance={1}
              axis="xy"
              onSortEnd={onSortEnd}
              videoArray={videoArray}
            >
              <h2 className="photo-upload-preview-image-heading">
                Video Thumbnail
              </h2>
              {videoArray.map((video, index) => {
                return (
                  <>
                    <SortableVideo video={video} index={index} key={index} />
                  </>
                );
              })}
            </SortableVideosContainer>
          )}
          {preview.length > 0 && step <= 2 && (
            <SortableImagesContainer
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
                    <SortableImage
                      image={image}
                      fireModal={() => fireModal(index)}
                      index={index}
                      key={index}
                    />
                  </>
                );
              })}
            </SortableImagesContainer>
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
          {step >= 3 && <SubmissionPage />}
        </>
      )}
    </div>
  );
}
