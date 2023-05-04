import React, { useEffect,useState } from "react";
import PostSnipets from "./PostSnipets";
function Post() {
  const [data, setData] = useState(null);
  var requestOptions = {
    method: 'GET'
  };
  useEffect(() => {
    fetch("http://localhost:4040/blogpost/",requestOptions)
      .then((response) => response.json())
      .then((result) => {setData(result)})
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="post-section">
      {data && data.allPost.map((ele)=>{
        return (<PostSnipets 
          post_id={ele._id}
        title={ele.title.substring(0,50)+"......"}
        desc={ele.description}
        keywords={ele.keywords}
        author={ele.author}
        categoryId={ele.category}
      />)
      })}
      
    </div>
  );
}

export default Post;
