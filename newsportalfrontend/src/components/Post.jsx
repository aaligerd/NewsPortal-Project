import React, { useEffect,useState } from "react";
import PostSnipets from "./PostSnipets";
import {PostData} from '../assets/demo/PostData';

function Post() {
  const [data, setData] = useState(PostData);
  var requestOptions = {
    method: 'GET'
  };
  // useEffect(() => {
  //   fetch("http://localhost:4040/blogpost/",requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setData(result))
  //     .catch((error) => console.log("error", error));
  
  // }, []);
  return (
    <div className="post-section">
      {data && data.map((ele)=>{
        return (<PostSnipets
        title={ele.title.substring(0,50)+"......"}
        desc={ele.description}
        keywords={ele.keywords}
        author={ele.author}
        category={ele.category}
      />)
      })}
      
    </div>
  );
}

export default Post;
