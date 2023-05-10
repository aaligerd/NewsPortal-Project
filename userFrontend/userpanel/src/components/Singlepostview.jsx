import React, { useContext } from "react";
import '../assets/css/singlepostview.css';
import { AppContext } from "../context/AppContext";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import YouMayLikeSection from "./YouMayLikeSection";

function Singlepostview() {
  const { blog } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <div className="post-section">
        <p className="post-title">{blog.title}</p>
        <div className="post-img-container">
          <img src={blog.image} alt="" srcset="" />
        </div>
        <p className="post-desc">{blog.description}</p>
        <p className="post-body" dangerouslySetInnerHTML={{ __html: blog.postbody }}></p>
      </div>
      <YouMayLikeSection categoryid={blog.category}/>
    </div>
  );
}

export default Singlepostview;
