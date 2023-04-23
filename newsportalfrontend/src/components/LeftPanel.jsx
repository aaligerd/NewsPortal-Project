import React, { useState, useContext } from "react";
import "../assets/css/leftpanel.css";
import { AdminContext } from "../context/adminContext";

function LeftPanel() {
  const { name, setTabName } = useContext(AdminContext);
  return (
    <div className="left-panel-container">
      <div className="admin-details">
        <div className="admin-name">
          <p>{"Hi " + name}</p>
        </div>
        <div className="admin-img">
          <img src={require("../assets/images/avatar.png")} alt="" srcset="" />
        </div>
      </div>
      <div className="admin-menu">
        <p
        className="abcd"
          onClick={() => {
            setTabName("Home");
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            setTabName("Posts");
          }}
        >
          Posts
        </p>
        <p
          onClick={() => {
            setTabName("NewPost");
          }}
        >
          New Post
        </p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default LeftPanel;
