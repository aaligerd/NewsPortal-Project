import React, { useContext } from "react";
import "../assets/css/adminhomepage.css";
import LeftPanel from "../components/LeftPanel";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import AdminHome from "../components/AdminHome";
import { AdminContext } from "../context/adminContext";

const Adminhomepage = () => {
  
  const { tabName } = useContext(AdminContext);
  return (
    <div className="continer-fluide">
      <div className="container">
        <div className="left-panel">
          <LeftPanel />
        </div>
        <div className="right-panel">
          <div className="main-body">
            {tabName === "Home" && <AdminHome />}
            {tabName === "Posts" && <Post />}
            {tabName === "NewPost" && <NewPost />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhomepage;
