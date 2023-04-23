import React from "react";
import "../assets/css/postsnipets.css";

function PostSnipets(props) {
  const { title, category, desc, keywords, author} = props;
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
        <p>{category}</p>
      </div>
      <div className="post-options">
        <div className="btn-row1">
          <div className="imageicon">
            <img src={require("../assets/images/edit.png")} alt="edit icon" />
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
