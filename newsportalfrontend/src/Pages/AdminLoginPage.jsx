import React,{useContext,useState} from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
import { AppContext } from '../context/appContext';
import { AdminContext } from '../context/adminContext';
function Homepage() {
    const [errorOnPage, setErrorOnPage] = useState("")//for any error on this page
    const [adminCredential, setAdminCredential] = useState({loginid:"",password:""});//for admin credential data
    const  {setLoggedIn}=useContext(AppContext);
    const {getAdminData}=useContext(AdminContext);
    //admin login method
    const adminLogin=()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const reqOption={
            method:'POST',
            headers: myHeaders,
            body:JSON.stringify(adminCredential)
        }  
        fetch('http://localhost:4040/admin/login',reqOption)
        .then((res)=>res.json())
        .then((res)=>{res.status===1?setAdminDataGlobalize(res):setErrorOnPage(res.msg)})
        .catch((err)=>{console.log(err)})
    };
    //if status === 1 then do this
    const setAdminDataGlobalize=(res)=>{
        getAdminData(res.existAdmin);
        setLoggedIn(true);
    }


  return (

        <div className="conatainer">
            <div className="middle-hero">
                <div className="brand-logo">
                    {/* <img src="" alt="" /> */}
                    <p>4S Paper</p>
                </div>
                <div className="mytext">
                    <p>admin portal</p>
                </div>
                <div className="login-form">
                    <div className="input-box">
                        <input type="text" value={adminCredential.loginid} placeholder='Enter Login Id' onChange={(e)=>{setAdminCredential({...adminCredential,loginid:e.target.value})}} /><br />
                        <input type="password" value={adminCredential.password} placeholder='Enter password' onChange={(e)=>{setAdminCredential({...adminCredential,password:e.target.value})}} />
                    </div>
                    <div className="input-btn">
                        <button onClick={adminLogin}>Sign in</button>
                    </div>
                    <div className="other-links">
                      {/* <Link to="/forgetpassword">Forget Password?</Link> */}
                      <p style={{color:"red",fontSize:"20px"}}>{errorOnPage}</p>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Homepage