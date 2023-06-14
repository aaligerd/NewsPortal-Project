import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/appContext';
import Loading from '../components/Loading';
import NewsEditFields from '../components/NewsEditFields';

function EditNews() {
  const {editableNewsId}=useContext(AppContext);


  const [isLoading, setIsLoading] = useState(true)
  const [editablePost, setEditablePost] = useState(null);
  
  const url=process.env.REACT_APP_SERVER_URL;


  useEffect(()=>{
    fetch(url+"blogpost/getpost/"+editableNewsId)
      .then((response) => response.json())
      .then((result) => {setEditablePost(result.singlePost);setIsLoading(false)})
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <>
    {isLoading?<Loading/>:<NewsEditFields 
    id={editablePost._id}
    title={editablePost.title}
    description={editablePost.description}
    image={editablePost.image}
    postbody={editablePost.postbody}
    author={editablePost.author}
    keywords={editablePost.keywords}
    category={editablePost.category}
    />}
    </>
    
  );
}

export default EditNews