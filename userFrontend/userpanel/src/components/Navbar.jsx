import React from 'react'
import "../assets/css/navbar.css";
import weathear from "../assets/images/cloudy-day.png";
import search from "../assets/images/search.png";
import user from "../assets/images/user.png";
import { months_name } from '../assets/months';
function Navbar() {
  const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth(); // Months start at 0!
let dd = today.getDate();
  return (
    <nav className="bigger-header container-fluid">
      <div className="smller-header container">
        <div className="header-left">
          
            <ul className="header-left-ul">
              <li>
                <div id="hamburger">
                  <div id="one"></div>
                  <div id="two"></div>
                  <div id="three"></div>
                  <div id="four"></div>
                </div>
                <div>Explore</div>
              </li>
              <li>
                <img src={search} alt="search icon" />
                Search
              </li>
            </ul>
          
          <div className="date-weather">
            {dd+" "+months_name[mm]+" , "+yyyy} | Kolkata 30<sup>o</sup>C
            <img src={weathear} alt="weathear" />
          </div>
        </div>
        <div className="header-mid">
          <div>
            <strong>SANGBAD KOLKATA</strong>
          </div>
        </div>
        <div className="header-right">
          <div>
            <ul className="header-right-menu">
              <li>
                {/* <div> 
                  <img src={user} alt="use image avater"/>
                  </div> */}
                Sign In
                </li>
            </ul>
          </div>
          <div className="subs-part">
            <div className="sub-text">
              <p>Start 10 Days Trial</p>
            </div>
            <div className="sub-btn">
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar