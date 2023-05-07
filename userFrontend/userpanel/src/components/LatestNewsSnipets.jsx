import React from 'react'
import '../assets/css/latestnewssnipets.css';
function LatestNewsSnipets({desc}) {
  return (
    <div className='news-desc'>
        <p>{desc}</p>
    </div>
  )
}

export default LatestNewsSnipets