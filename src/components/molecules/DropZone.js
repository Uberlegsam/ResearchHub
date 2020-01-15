import React, { useState, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import cloud from '../../images/cloud.svg';
import Delete from '../../images/delete.svg';
import Pdf from '../../images/pdf.svg';


const style = {
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    paddingBottom: '49px',
    border: '1.5px dashed #4E53FF',
    backgroundColor: 'rgba(78, 83, 255, 0.0252131)',
    color: '$haiti',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };


function Dropzone() {
    const [myFiles, setMyFiles] = useState([])
    
    const onDrop = useCallback(acceptedFiles => {
        setMyFiles([...myFiles, ...acceptedFiles])
        document.getElementsByClassName('dropzone-content--active')[0].style.display='none';
        document.getElementsByClassName('dropzone-content--disabled')[0].style.display='block';
        let droptitle = document.getElementsByClassName('dropzone-title')[0];
        droptitle.innerHTML = '<h3 class="dropzone-title">Paper Upload<span>*</span></h3>'
      })
      
  const {getRootProps, getInputProps, open} = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: 'application/pdf',
    // maxSize: 15728640
  })
  const removeFile = file => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
    document.getElementsByClassName('dropzone-content--active')[0].style.display='block';
    document.getElementsByClassName('dropzone-content--disabled')[0].style.display='none';
    let droptitle = document.getElementsByClassName('dropzone-title')[0];
    console.log(droptitle)
    droptitle.innerHTML = '<h3 class="dropzone-title">Paper PDF<span>*</span></h3>'
  }

  const file = myFiles.map(file => (
    <div className="file-upload" key={file.path}>
        <img src={Pdf}></img>
        <div className="file-info">
            <p className="filename">{file.path}</p>
            <p className="filesize">{Math.ceil(file.size/1000000)} MB</p>
        </div>
          
        <img className="file-delete-img" src={Delete} onClick={removeFile(file)}></img>
    </div>
  ));

  return (
    <div className="dropzone-content ">
      <div className='dropzone-content--active'>
        <div {...getRootProps({style})}>
          <input {...getInputProps()} id="pdf-path"/>
              <img src={cloud}></img>
              <p className="upload-text">Drag & drop or <span onClick={open}>browse</span> PDF to upload</p>
        </div>
        <p className="underdroptext">or paste a url to the paper</p>
        <input type="text" className="input-information" placeholder="Paste a url to the paper" id="pdf-url"/>
      </div>
      <div className="dropzone-content--disabled">
          {file}
      </div>
    </div>
  );
}


export default Dropzone