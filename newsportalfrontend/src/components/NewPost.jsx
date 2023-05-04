import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "../assets/css/NewPost.css";
import { useEffect } from "react";
function NewPost() {
  const editor = useRef(null);
  const [errorMsg,setErrorMsg]=useState("");
  const [categoryNames, setCategoryNames] = useState([]);
  const [selectCategory, setSelectCategory] = useState("Select Category");
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    image: "",
    postbody: "",
    author: "",
    keywords: "",
    category: "",
  });

  //text editor configaration 
  const joditConfig = {
    placeholder: "Start typings",
    height: 600,
    buttons:
      "bold,italic,underline,ul,ol,font,fontsize,paragraph,image,cut,copy,paste,hr,table,link,indent,outdent,left,source",
  };

  const publishPostData = () => {
    const header = new Headers();
    header.append("Content-Type", "application/json");
    const reqOption = {
      method: "POST",
      headers: header,
      body: JSON.stringify(postData),
    };
    console.log(postData);
    fetch("http://localhost:4040/blogpost/savepost", reqOption)
      .then((res) => res.json())
      .then((res) => {
        if(res.status===0){
          setErrorMsg(res.msg);
          setTimeout(() => {
            setErrorMsg("");
          }, 10000);
        }else{
          setErrorMsg(res.msg);
          setTimeout(() => {
              setErrorMsg("");
          }, 10000);
        }
      })
      .catch((err) => console.log(err));
  };

  //fetching all category names from database and stored in categoryNames
  useEffect(() => {
    fetch("http://localhost:4040/category/all")
      .then((res) => res.json())
      .then((res) => setCategoryNames(res.allCategory))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="from-container">=
      <div className="post-center-panel">
      <div className="error-msg">
          <p style={{color:"red",textAlign:"center"}}>{errorMsg}</p>
        </div>
        <div className="title-box">
          <label htmlFor="title-input-box">Post title</label>
          <input
            type="text"
            id="title-input-box"
            value={postData.title}
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
        </div>
        <div className="post-body">
          <label>Post Body</label>
          <div>
            <JoditEditor
              ref={editor}
              value={postData.postbody}
              // config={joditConfig}
              onChange={(newContent) =>
                setPostData({ ...postData, postbody: newContent })
              }
            />
          </div>
        </div>
      </div>
      <div className="post-right-panel">
        <div className="post-image">
        <label htmlFor="image-url-box">Image URL</label>
          <input id="image-url-box" type="text" value={postData.image} onChange={(e)=>{setPostData({...postData,image:e.target.value})}} />
        </div>
        <div className="post-desc-box">
          <label htmlFor="desc-input-box">Post description</label>
          <input
            type="text"
            id="desc-input-box"
            value={postData.description}
            onChange={(e) => {
              setPostData({ ...postData, description: e.target.value });
            }}
          />
        </div>

        <div className="post-author-box">
          <label htmlFor="post-author">Author</label>
          <input
            type="text"
            id="post-author"
            value={postData.author}
            onChange={(e) => {
              setPostData({ ...postData, author: e.target.value });
            }}
          />
        </div>
        <div className="post-category-box">
          <label htmlFor="post-category">Category</label>
          <select
            value={selectCategory}
            id="post-category"
            onChange={(e) => {
              setSelectCategory(e.target.value);
              setPostData({ ...postData, category: e.target.value });
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
            value={postData.keywords}
            onChange={(e) => {
              setPostData({ ...postData, keywords: e.target.value });
            }}
          />
        </div>
        <div className="sub-btn">
          <button onClick={publishPostData}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
