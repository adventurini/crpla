import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


function FileUploader({children, noClick, setThumbnail, preview, setPreview, post, setPost}) {
  console.log(preview)
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      console.log(1)
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
  console.log(preview)

  // useEffect(() => () => {
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   preview.forEach(file => URL.revokeObjectURL(file.preview));
  // }, [preview]);
  
  return (
    <section className="container">
      {console.log(preview)}
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        {children}
      {/* {thumbs} */}
     </div>
    </section>
  );
}


export default FileUploader;