import React, { useState } from "react";
import "./ListingModal.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import UserAvatar from "../layout/UserAvatar";
import useOnclickOutside from 'react-cool-onclickoutside';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PreviousArrow, NextArrow} from '../carousel/Arrows'

export default function ListingModal(props) {
  const { preview, imageModal, setImageModal, index } = props;
  const closeModal = useOnclickOutside(() => {
    setImageModal(false);
  });

  let imageIndex = index;




 

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
    <div key={imageModal} className="listing-modal" ref={closeModal}>
      <div className="listing-modal-left">
     
        <div className="listing-modal-image-container">
        <Slider {...settings} className="listing-modal-slider">
      {preview.map((image, i)=> {
        return(
          
        <div className="listing-modal-image-container" key={i}>
 <img src={preview[imageIndex].preview} className="listing-modal-image" />
 
    {imageIndex === preview.length - 1 ?

      imageIndex=0
    
    : imageIndex++

      }
 </div>)
      })}
         
          </Slider>
        </div>
       
        </div>
        <div className="listing-modal-right">
        <div className="listing-modal-content">
          <div className="listing-modal-title">
            <div className="listing-modal-user-avatar">
              <UserAvatar image='https://ca.slack-edge.com/T4JUEB3ME-UF0MEJPQS-456f70806ec0-512' height="50px" width="50px" />
            </div>
            <div className="listing-modal-credentials">
              <p className="listing-modal-user-name">Anthony Venturini</p>
              <p className="listing-modal-time">2 hours ago</p>
            </div>
            <div className="listing-modal-footer">
    
        </div>
          </div>
          <p className="listing-modal-word-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
         
        </div>
      
    </div>
  );
}
