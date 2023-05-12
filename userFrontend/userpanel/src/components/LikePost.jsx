import React,{useContext} from 'react';
import '../assets/css/likepost.css';
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";


function LikePost({image,title,id}) {

    const{setVisibleNewsId}=useContext(AppContext);
    const navigate=useNavigate();
    const paraOnclick=()=>{setVisibleNewsId(id);}
  return (
    <div className='like-card'>
            <div className='like-card-image'>
                <img src={image} alt="news captured" />
            </div>
            <div className="like-card-title">
                <p onClick={paraOnclick}>{title.substring(0,50)+"...      Know more"}</p>
            </div>
    </div>
  )
}

export default LikePost