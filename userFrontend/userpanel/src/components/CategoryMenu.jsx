import React,{useContext} from 'react'
import '../assets/css/categorymenu.css';
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
            </div>
    </div>
  )
}

export default CategoryMenu