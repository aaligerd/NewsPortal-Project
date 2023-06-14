import React,{useState,useRef, useEffect,useContext} from 'react';
import JoditEditor from "jodit-react";
import "../assets/css/NewPost.css";
import { AdminContext } from '../context/adminContext';

function NewsEditFields(props) {
  const {id,title,description,image,postbody,author,keywords,category}=props
  const [updatedPost, setUpdatedPost] = useState({id,title,description,image,postbody,author,keywords,category});
  const [categoryNames, setCategoryNames] = useState(null);
  const [selectCategory, setSelectCategory] = useState({name:"Select Category"});
  const [errormsg, setErrormsg] = useState("");

  const editor = useRef(null);

  const {setTabName}=useContext(AdminContext)
  const url=process.env.REACT_APP_SERVER_URL;
  useEffect(()=>{
    //fetching all category list
    fetch(url+"category/all")
    .then((res) => res.json())
    .then((res) => setCategoryNames(res.allCategory))
    .catch((err) => console.error(err));
  },[]);

  //setting request options
  const header=new Headers();
  header.append("Content-Type", "application/json");
    const reqOption = {
      method: "POST",
      headers: header,
      body: JSON.stringify(updatedPost),
    };
  const updatePost=()=>{
    fetch(url+"blogpost/update/"+id,reqOption)
    .then((res) => res.json())
    .then((res) => {setErrormsg(res.msg);setTimeout(() => {
      setTabName("Posts");
    }, 5000);})
    .catch((err) => console.error(err));
  }
  return (
    <div className="from-container">=
    <div className="post-center-panel">
    <div className="error-msg">
        <p style={{color:"red",textAlign:"center"}}>{errormsg}</p>
      </div>
      <div className="title-box">
        <label htmlFor="title-input-box">Post title</label>
        <input
          type="text"
          id="title-input-box"
          value={updatedPost.title}
          onChange={(e) => {
            setUpdatedPost({ ...updatedPost, title: e.target.value });
          }}
        />
      </div>
      <div className="post-body">
        <label>Post Body</label>
        <div>
          <JoditEditor
            ref={editor}
            value={updatedPost.postbody}
            // config={joditConfig}
            onChange={(newContent) =>
              setUpdatedPost({ ...updatedPost, postbody: newContent })
            }
          />
        </div>
      </div>
    </div>
    <div className="post-right-panel">
      <div className="post-image">
      <label htmlFor="image-url-box">Image URL</label>
        <input id="image-url-box" type="text" value={updatedPost.image} onChange={(e)=>{setUpdatedPost({...updatedPost,image:e.target.value})}} />
      </div>
      <div className="post-desc-box">
        <label htmlFor="desc-input-box">Post description</label>
        <input
          type="text"
          id="desc-input-box"
          value={updatedPost.description}
          onChange={(e) => {
            setUpdatedPost({ ...updatedPost, description: e.target.value });
          }}
        />
      </div>

      <div className="post-author-box">
        <label htmlFor="post-author">Author</label>
        <input
          type="text"
          id="post-author"
          value={updatedPost.author}
          onChange={(e) => {
            setUpdatedPost({ ...updatedPost, author: e.target.value });
          }}
        />
      </div>
      <div className="post-category-box">
        <label htmlFor="post-category">Category</label>
        <select
          value={selectCategory.name}
          id="post-category"
          onChange={(e) => {
            setSelectCategory(e.target.value);
            setUpdatedPost({ ...updatedPost, category: e.target.value });
          }}
        >
          {categoryNames &&
            categoryNames.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="post-keyword-box">
        <label htmlFor="post-keywords">Keywords</label>
        <input
          type="text"
          id="post-keywords"
          value={updatedPost.keywords}
          onChange={(e) => {
            setUpdatedPost({ ...updatedPost, keywords: e.target.value });
          }}
        />
      </div>
      <div className="sub-btn">
        <button onClick={updatePost}>Upate</button>
      </div>
    </div>
  </div>
  )
}

export default NewsEditFields