import React,{useEffect,useState,useContext} from "react";
import "../assets/css/newscardsmall.css";
import {months_name} from "../assets/months.js";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function NewsCardSmall({title,date,image,categoryid,id}) {
  const{setVisibleNewsId}=useContext(AppContext);
  const navigate=useNavigate();

  const paraOnclick=()=>{setVisibleNewsId(id);navigate("/post")}


  
  const d=new Date(date);
  date=d.getDate()+" "+months_name[d.getMonth()] +" ,"+d.getFullYear();
  const [category, setCategory] = useState("")
  useEffect(()=>{
    fetch("http://localhost:4040/category/get/"+categoryid)
    .then((res)=>res.json())
    .then((res)=>setCategory(res.category.name))
    .catch((err)=>{console.error(err)});
  },[]);
  return (
    <div className="news-small-card">
      <div className="small-news-desc">
        <p onClick={paraOnclick} style={{cursor:"pointer"}}>
          {title}
        </p>
        <p>
          <span style={{textTransform:"capitalize",color:"rgb(35, 175, 230)"}}>{category}</span> - {date}
        </p>
      </div>
      <div className="card-img">
        <img src={image} alt="news captured" />
      </div>
    </div>
  );
}
