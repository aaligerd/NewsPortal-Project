import React from "react";
import "../assets/css/latestnewspanel.css";
import LatestNewsSnipets from "./LatestNewsSnipets";
function LatestNewsPanel() {
  const psg = [
    "Skipping meals and taking prescribed diet pills linked to minimal weight loss: Study",
    "Wrestlers' protest: WFI chief Brij Bhushan's video statement as farmers gather at Jantar Mantar",
    "Hina Khan’s black ruched dress is the perfect weekend fashion inspo",
    "Taapsee Pannu wears saree for stroll around New York during vacation with boyfriend, sister"
  ];
  return (
    <div className="latest-news">
      <div className="topic">
        <p>
          <span>[</span>
          LATEST NEWS
          <span>]</span>
        </p>
      </div>

      <div className="news-snipets">
        {psg.map((ele,indx)=>{
          return <LatestNewsSnipets desc={ele} key={{indx}}/>
        })}
      </div>
    </div>
  );
}

export default LatestNewsPanel;
