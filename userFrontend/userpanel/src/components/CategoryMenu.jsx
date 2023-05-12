import React,{useContext} from 'react'
import '../assets/css/categorymenu.css';
<<<<<<< HEAD
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function CategoryMenu() {
  const{setNewsCategorytab,setTabChanged,tabChanged,currentPage,setCurrentPage}=useContext(AppContext);
  const navigate=useNavigate();
  const chanegeTab=(catagoryTabName)=>{
    setNewsCategorytab(catagoryTabName);
    setTabChanged(!tabChanged);
    console.log(currentPage)
    if(currentPage===2){setCurrentPage(1);navigate("/")}
  }
  return (
    <div>
            <div className="menu-wraper">
                <p onClick={()=>{chanegeTab("home");}}>Home</p>
                <p onClick={()=>{chanegeTab("cricket")}}>Cricket</p>
                <p onClick={()=>{chanegeTab("lifestyle")}}>LifeStyle</p>
                <p onClick={()=>{chanegeTab("india")}}>India</p>
                <p onClick={()=>{chanegeTab("world")}}>World</p>
                <p onClick={()=>{chanegeTab("kolkata")}}>Kolkata</p>
                <p onClick={()=>{chanegeTab("entertainment")}}>Entertainment</p>
=======
function CategoryMenu() {
  return (
    <div>
            <div className="menu-wraper">
                <p>Home</p>
                <p>Latest News</p>
                <p>Cricket</p>
                <p>Education</p>
                <p>India</p>
                <p>World</p>
                <p>Kolkata</p>
                <p>Entertainment</p>
>>>>>>> parent of dd9d903 (cron job started)
            </div>
    </div>
  )
}

export default CategoryMenu