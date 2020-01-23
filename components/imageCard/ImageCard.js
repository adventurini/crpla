import React, {useState} from "react";
import "./ImageCard.scss";
import PostModal from '../postCard/PostModal'

export default function ImageCard({ post }) {

  const [postModal, setPostModal] = useState(false);
  return (
    <div key={post} className="image-card" onClick={() => setPostModal(true)}>
      <div className="image-card-overlay"></div>
      <img className="image-card-image" src={post.url[0]}></img>
      {postModal &&
        <div className="image-card-modal">
        <PostModal postModal={postModal} post={post} setPostModal={setPostModal}/>
        </div>
}
    </div>
  );
}
