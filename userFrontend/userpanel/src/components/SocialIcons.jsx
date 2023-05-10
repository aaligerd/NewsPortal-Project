import React from 'react'

function SocialIcons() {
  return (
    <div className="social-image-container">
        <div className="image-container">
          <img src={require('../assets/images/facebook.png')} alt="" />
        </div>
        <div className="image-container">
          <img src={require('../assets/images/instagram.png')} alt="" />
        </div>
        <div className="image-container">
          <img src={require('../assets/images/youtube.png')} alt="" />
        </div>
        <div className="image-container">
          <img src={require('../assets/images/twitter.png')} alt="" />
        </div>
      </div>
  )
}

export default SocialIcons