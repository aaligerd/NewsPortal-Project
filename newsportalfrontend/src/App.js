import './App.css';
import React,{useContext,useState} from "react";
import AdminLoginPage from './Pages/AdminLoginPage';
import Adminhomepage from './Pages/Adminhomepage';
import DemoTest from './Pages/DemoTest';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { AppContext, AppPovider } from './context/appContext';
function App() {
  const  {isLoggedIn,setLoggedIn}=useContext(AppContext);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/admin" element={<Adminhomepage />} />
          <Route path="/user/:id" element={<DemoTest />} />
        </Routes>
      </BrowserRouter> */}
      {isLoggedIn?<Adminhomepage/>:<AdminLoginPage/>}
    </>
  );
}

export default App;
