import React,{useContext,useEffect,useState} from 'react';
import { AppContext } from '../context/AppContext';
import Loading from '../components/Loading';
import Singlepostview from '../components/Singlepostview';


function SinglePostPage() {
    const{visibleNewsId}=useContext(AppContext);
    const [blog, setBlog] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(()=>{
        setIsLoading(true);
        fetch("http://localhost:4040/blogpost/getpost/user/"+visibleNewsId)
        .then((res)=>res.json())
        .then((res)=>{setBlog(res);setIsLoading(false)})
        .catch((err)=>{console.error(err)});
    },[]);
  return (
    <div>
        {isLoading?<Loading/>:<Singlepostview/>}
    </div>
  )
}

export default SinglePostPage