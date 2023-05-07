import React from "react";
import "../assets/css/newscardsmall.css";

export default function NewsCardSmall() {
  return (
    <div className="news-small-card">
      <div className="small-news-desc">
        <p>
          IPL 2023: Glenn Phillips, Abdul Samad pull off stunning upset for
          Sunrisers
        </p>
        <p>
          <span>Cricket</span> 8 May,2023
        </p>
      </div>
      <div className="card-img">
        <img src="https://www.hindustantimes.com/ht-img/img/2023/05/07/550x309/India-IPL-Cricket-122_1683482839350_1683482861266.jpg" alt="" />
      </div>
    </div>
  );
}
