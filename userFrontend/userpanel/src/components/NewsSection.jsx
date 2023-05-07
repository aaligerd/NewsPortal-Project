import React from 'react';
import '../assets/css/newsSection.css';
import LatestNewsPanel from './LatestNewsPanel';
import MainNewsPanel from './MainNewsPanel';
import SocialPanel from './SocialPanel';
function NewsSection() {
  return (
    <div>
        <div className="news-section">
            <div className='latest-news-panel'>
                <LatestNewsPanel/>
            </div>
            <div className='main-news-panel'>
               <MainNewsPanel/>
            </div>
            <div className='social-media-panel'>
                <SocialPanel/>
            </div>
        </div>
    </div>
  )
}

export default NewsSection