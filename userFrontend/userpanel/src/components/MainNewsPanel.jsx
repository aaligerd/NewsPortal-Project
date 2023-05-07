import React from 'react'
import NewsCardBig from './NewsCardBig'
import '../assets/css/mainnewspanel.css';
import NewsCardSmall from './NewsCardSmall';
function MainNewsPanel() {
  return (
    <div>
      <div className="main-topic">
        <span>[</span>
        <p>TOP NEWS</p>
        <span>]</span>
      </div>
      <NewsCardBig/>
      <NewsCardSmall/>
      <NewsCardSmall/>
      <NewsCardSmall/>
      <NewsCardSmall/>
      <NewsCardSmall/>
      <NewsCardSmall/>
      <NewsCardSmall/>
    </div>
  )
}

export default MainNewsPanel