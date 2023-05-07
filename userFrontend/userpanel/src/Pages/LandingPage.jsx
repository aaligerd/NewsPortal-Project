import React from 'react'
import Navbar from '../components/Navbar';
import '../assets/css/landingpage.css';
import CategoryMenu from '../components/CategoryMenu';
import NewsSection from '../components/NewsSection';
function LandingPage() {
  return (
    <div>
        <Navbar/>
        <CategoryMenu/>
        <NewsSection/>
    </div>
  )
}

export default LandingPage