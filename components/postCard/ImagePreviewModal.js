import React, { useState } from "react";
import "./ImagePreviewModal.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import UserAvatar from "../layout/UserAvatar";
import useOnclickOutside from 'react-cool-onclickoutside';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PreviousArrow, NextArrow} from '../carousel/Arrows'

export default function ImagePreviewModal(props) {
  const { preview, imageModal, setImageModal, index } = props;
  const closeModal = useOnclickOutside(() => {
    setImageModal(false);
  });

  let imageIndex = index;

console.log(preview, index, imageIndex)


 

  var settings = {
    dots: true,
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div key={imageModal} className="image-preview-modal" ref={closeModal}>
      <div className="image-preview-modal-left">
     
        <div className="image-preview-modal-image-container">
      
        <Slider {...settings} className="image-preview-modal-slider">
      {preview.map((image, i)=> {
        return(
          
        <div className="image-preview-modal-image-container" key={i}>
 <img src={preview[imageIndex].preview ? preview[imageIndex].preview : preview[imageIndex]} className="image-preview-modal-image" />
 
    {imageIndex === preview.length - 1 ?

      imageIndex=0
    
    : imageIndex++

      }
 </div>)
      })}
         
          </Slider>
        </div>
       
        </div>
        {/* <div className="image-preview-modal-right">
        <div className="image-preview-modal-content">
          <div className="image-preview-modal-title">
            <div className="image-preview-modal-user-avatar">
              <UserAvatar image='https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512' height="50px" width="50px" />
            </div>
            <div className="image-preview-modal-credentials">
              <p className="image-preview-modal-user-name">Anthony Venturini</p>
              <p className="image-preview-modal-time">2 hours ago</p>
            </div>
            <div className="image-preview-modal-footer">
    
        </div>
          </div>
          <p className="image-preview-modal-word-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
         
        </div> */}
      
    </div>
  );
}
