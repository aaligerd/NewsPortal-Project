import React from "react";
import '../assets/css/newsCardBig.css';
function NewsCardBig() {
  return (
    <div className="news-card">
      <p>
        IPL 2023: Glenn Phillips, Abdul Samad pull off stunning upset for Sunrisers
      </p>
      <p>Cricket - 8 May,2023</p>
      <div className="news-img">
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/05/07/550x309/India-IPL-Cricket-122_1683482839350_1683482861266.jpg"
          alt="srh vs rr"
        />
      </div>
    </div>
  );
}

export default NewsCardBig;
