import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "../assets/css/NewPost.css";
function NewPost() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="from-container">
      <div className="post-center-panel">
        <div className="title-box">
          <label htmlFor="title-input-box">Post title</label>
          <input type="text" id="title-input-box" />
        </div>
        <div className="post-body">
          <label>Post Body</label>
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </div>
      </div>
      <div className="post-right-panel">
        <div className="desc-box">
          <label htmlFor="desc-input-box">Post description</label>
          <input type="text" id="desc-input-box" />
        </div>

        <div className="post-author-box">
          <label htmlFor="post-author">Author</label>
          <input type="text" id="post-author" />
        </div>
        <div className="post-category-box">
          <label htmlFor="post-category">Category</label>
          <select name="" id="post-category">
            <option value="Sports">Sports</option>
            <option value="Politics">Politics</option>
            <option value="Entertainment">Entertainment</option>
            <option value="International">International</option>
          </select>
        </div>
        <div className="post-keyword-box">
          <label htmlFor="post-keywords">Keywords</label>
          <input type="text" id="post-keywords" />
        </div>
        <div className="sub-btn">
          <button>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
