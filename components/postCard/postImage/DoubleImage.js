import React from "react";
import './DoubleImage.scss'

export default function DoubleImage(props) {
    const {post} = props
  return (
    <div className='double-image'>
      <img src={post.url[0]}></img>
      <img src={post.url[1]}></img>
    </div>
  );
}
