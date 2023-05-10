import React,{useEffect,useState,useContext} from "react";
import '../assets/css/newsCardBig.css';
import {months_name} from "../assets/months.js"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
function NewsCardBig({title,desc,date,image,categoryid,id}) {

  const{setVisibleNewsId}=useContext(AppContext);
  const navigate=useNavigate();


  const d=new Date(date);
  date=d.getDate()+" "+months_name[d.getMonth()] +" ,"+d.getFullYear();
  const [category, setCategory] = useState("");
  const paraOnclick=()=>{setVisibleNewsId(id);navigate("/post")}
  useEffect(()=>{
    fetch("http://localhost:4040/category/get/"+categoryid)
    .then((res)=>res.json())
    .then((res)=>setCategory(res.category.name))
    .catch((err)=>{console.error(err)});
  },[]);

  return (
    <div className="news-card">
      <p onClick={paraOnclick} className="big-post-title">
        {title}
      </p>
      <p style={{textTransform:"capitalize"}}>{category} -{date}</p>
      <div className="news-img">
        <img
          src={image}
          alt="news captured"
        />
      </div>
    </div>
  );
}

export default NewsCardBig;
