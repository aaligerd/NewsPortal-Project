import React,{useEffect,useState} from "react";
import '../assets/css/newsCardBig.css';
import {months_name} from "../assets/months.js"
function NewsCardBig({title,desc,date,image,categoryid}) {
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
    <div className="news-card">
      <p>
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
