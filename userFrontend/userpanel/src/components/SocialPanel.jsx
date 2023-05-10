import React from "react";

import "../assets/css/socialpanel.css";
import SocialIcons from "./SocialIcons";
function SocialPanel() {
  return (
    <div>
      <div className="main-topic">
        <span>[</span>
        <p>SOCIAL</p>
        <span>]</span>
      </div>
      <SocialIcons/>
    </div>
  );
}

export default SocialPanel;
