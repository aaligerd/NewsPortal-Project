import React,{useContext} from 'react'
import '../assets/css/categorymenu.css';
import { useNavigate } from 'react-router-dom';

function CategoryMenu() {
  const navigate=useNavigate();
  return (
    <div>
            <div className="menu-wraper">
                <p onClick={()=>{navigate("/")}}>Home</p>
                <p>Latest News</p>
                <p>Cricket</p>
                <p>Education</p>
                <p>India</p>
                <p>World</p>
                <p>Kolkata</p>
                <p>Entertainment</p>
            </div>
    </div>
  )
}

export default CategoryMenu