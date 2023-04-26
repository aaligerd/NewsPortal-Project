import './App.css';
import React,{useContext,useState} from "react";
import AdminLoginPage from './Pages/AdminLoginPage';
import Adminhomepage from './Pages/Adminhomepage';
import { AppContext, AppPovider } from './context/appContext';
function App() {
  const  {isLoggedIn,setLoggedIn}=useContext(AppContext);
  return (
    <>
      {isLoggedIn?<Adminhomepage/> : <AdminLoginPage/>}
    </>
  );
}

export default App;
