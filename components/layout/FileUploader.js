import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function FileUploader({children, noClick, setThumbnail, preview, setPreview, post, setPost}) {

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setPost({
        ...post, 
        media: [...post.media, ...acceptedFiles]
      })
     
      setPreview([...preview, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    },
    noClick : noClick ? true : false
  });
  

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    preview.forEach(file => URL.revokeObjectURL(file.preview));
  }, [preview]);
  
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {children}
      {/* {thumbs} */}
     </div>
    </section>
  );
}


export default FileUploader;