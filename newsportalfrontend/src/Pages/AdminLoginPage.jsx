import React from 'react';
import '../assets/css/homepage.css';
import {Link} from 'react-router-dom';
function Homepage() {
    


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
                        <input type="text" placeholder='Enter Id' autoComplete='off' /><br />
                        <input type="password" placeholder='Enter password' autoComplete='off'/>
                    </div>
                    <div className="input-btn">
                        <button>Sign in</button>
                    </div>
                    <div className="other-links">
                      <Link to="/forgetpassword">Forget Password?</Link>
                      
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Homepage