import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs,title}) => {


  const [file,setFile] =useState("");
  return (
    <div className='New'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>Image:<DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id='file' onChange={e=>setFile(e.target.files[0])}  style={{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
               <div className="formInput" key={input.id}>
               <label>{input.lable}</label>
               <input type={input.type} placeholder={input.placeholder}/>
             </div>
              ))}
              
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
