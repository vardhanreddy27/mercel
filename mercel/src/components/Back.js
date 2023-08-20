import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { Button, Dialog } from "@mui/material";
function Back() { 
const navigate = useNavigate();
return (
    <>      
      <Button className="backbtn">
            <IoChevronBackOutline size={30} onClick={() => navigate(-1)} className="backbtnicon" />
      </Button>
    </>
  )
}

export default Back
