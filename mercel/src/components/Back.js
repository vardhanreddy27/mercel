import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

function Back() {
    
    const navigate = useNavigate();

  return (
    <>
         <div className="mt-4 mb-4 ms-3 d-flex" onClick={() => navigate(-1)}>
    <IoArrowBackSharp size={20}/> 
      </div>
    </>
  )
}

export default Back
