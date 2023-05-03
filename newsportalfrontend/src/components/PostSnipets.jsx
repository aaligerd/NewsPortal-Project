import React,{useState,useEffect, useContext} from "react";
import "../assets/css/postsnipets.css";
import { AppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom';


function PostSnipets(props) {
  const { title, categoryId, desc, keywords, author} = props;
  const [categoryName, setCategoryName] = useState("");
  const {getEditableNewsId}=useContext(AppContext);
  const navigate=useNavigate();
  const editNews=()=>{
    getEditableNewsId(categoryId);
    navigate('/editnews');
  }
  
  useEffect(()=>{
    fetch('http://localhost:4040/category/get/'+categoryId,{method:"POST"})
    .then((res)=>res.json())
    .then((res)=>setCategoryName(res.category.name))
    .catch((err)=>{console.log(err)})

    console.log("hiiiiii",categoryName)
  },[]);
  return (
    <div className="post-snipet-container">
      <div className="post-details">
        <div className="post-title">
          <p>{title}</p>
        </div>
        <div className="post-desc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="post-keyword">
        <p>Keywords</p>
        <p>{keywords}</p>
      </div>
      <div className="post-author">
        <p>Author</p>
        <p>{author}</p>
      </div>
      <div className="post-catagory">
        <p>Category</p>
        <p>{categoryName}</p>
      </div>
      <div className="post-options">
        <div className="btn-row1">
          <div className="imageicon">
            <img src={require("../assets/images/edit.png")} alt="edit icon" onClick={editNews}/>
          </div>
          <div className="imageicon">
            <img src={require("../assets/images/share.png")} alt="edit icon" />
          </div>
        </div>
        <div className="btn-row2">
          <div className="imageicon">
            <img src={require("../assets/images/view.png")} alt="edit icon" />
          </div>
          <div className="imageicon">
            <img src={require("../assets/images/trash.png")} alt="edit icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSnipets;
