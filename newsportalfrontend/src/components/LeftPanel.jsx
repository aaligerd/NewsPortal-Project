import React, {useContext } from "react";
import "../assets/css/leftpanel.css";
import { AdminContext } from "../context/adminContext";
import { AppContext } from '../context/appContext';

function LeftPanel() {
  const { adminData,setAdminData, setTabName } = useContext(AdminContext);
  const  {setLoggedIn}=useContext(AppContext);
  const url=process.env.REACT_APP_SERVER_URL;

  //logout method
  const adminLogout=()=>{
      fetch(url+'admin/logout')
      .then((res)=>res.json())
      .then((res)=>{
        if(res.status===1){
          setAdminData();
          setLoggedIn(false);
        }
      })
      .catch((err)=>{console.log(err)})
  }



  return (
    <div className="left-panel-container">
      <div className="admin-details">
        <div className="admin-name">
          <p>{"Hi " + adminData.name}</p>
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
        <p onClick={adminLogout}>Logout</p>
      </div>
    </div>
  );
}

export default LeftPanel;
