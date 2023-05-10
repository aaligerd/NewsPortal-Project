import React,{useEffect,useState} from 'react'
import '../assets/css/mainnewspanel.css';
import NewsCardBig from './NewsCardBig'
import NewsCardSmall from './NewsCardSmall';
function MainNewsPanel() {
  const [blogposts, setBlogposts] = useState(null);
  const [categories,SetCategories]=useState(null);
  useEffect(()=>{
    fetch("http://localhost:4040/blogpost/")
    .then((res)=>res.json())
    .then((res)=>setBlogposts(res.allPost))
    .catch((err)=>{console.error(err)});
    fetch("http://localhost:4040/category/all")
    .then((res)=>res.json())
    .then((res)=>SetCategories(res.allCategory))
    .catch((err)=>{console.error(err)});
  },[]);
  return (
    <div>
      <div className="main-topic">
        <span>[</span>
        <p>TOP NEWS</p>
        <span>]</span>
      </div>

      {blogposts && blogposts.map((item,indx)=>{
        if(indx==0){
          return <NewsCardBig title={item.title} id={item._id} image={item.image} categoryid={item.category} date={item.date}/>
        }else{
          return  <NewsCardSmall title={item.title} id={item._id} image={item.image} categoryid={item.category} date={item.date}/>
        }
      })}
    </div>
  )
}

export default MainNewsPanel