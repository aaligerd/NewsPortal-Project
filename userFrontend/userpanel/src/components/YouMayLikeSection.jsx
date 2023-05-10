import React, { useState,useEffect } from 'react';
import '../assets/css/youmaylike.css';
import LikePost from './LikePost';

function YouMayLikeSection({categoryid}) {
    const [likeNews, setLikeNews] = useState(null);
    const [nextNews, setNextNews] = useState(false);
  useEffect(()=>{
    fetch("http://localhost:4040/blogpost/getpost/category/"+categoryid)
    .then((res)=>res.json())
    .then((res)=>setLikeNews(res.categoryPost))
    .catch((err)=>{console.error(err)});
  },[]);
  
    return (
      <div className='like-container'>
        <h3> You may like: </h3>
        <div className='like-post-container'>
            {likeNews && likeNews.map((item,indx)=><LikePost image={item.image} title={item.title} key={indx} id={item._id}/>)}
        </div>
      </div>
    )
  
}

export default YouMayLikeSection