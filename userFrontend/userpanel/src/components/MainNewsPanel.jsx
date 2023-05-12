import React,{useContext, useEffect,useState} from 'react'
import '../assets/css/mainnewspanel.css';
import NewsCardBig from './NewsCardBig'
import NewsCardSmall from './NewsCardSmall';
import { AppContext } from '../context/AppContext';
function MainNewsPanel() {
  const [blogposts, setBlogposts] = useState(null);
  const {tabChanged,newsCategorytab}=useContext(AppContext);
  let url;
  if(newsCategorytab==="home"){
    url=process.env.REACT_APP_BASE_URL+"blogpost/";
  }else{
    url=process.env.REACT_APP_BASE_URL+"blogpost/getpost/category/"+newsCategorytab;
  }
  console.log(url)
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>setBlogposts(res.allPost))
    .catch((err)=>{console.error(err)});
  },[tabChanged]);
  return (
    <div>
      <div className="main-topic">
        <span>[</span>
        <p>TOP NEWS</p>
        <span>]</span>
      </div>

      {blogposts && blogposts.map((item,indx)=>{
        if(indx==0){
          return <NewsCardBig key={indx} title={item.title} id={item._id} image={item.image} categoryid={item.category} date={item.date}/>
        }else{
          return  <NewsCardSmall key={indx} title={item.title} id={item._id} image={item.image} categoryid={item.category} date={item.date}/>
        }
      })}
    </div>
  )
}

export default MainNewsPanel