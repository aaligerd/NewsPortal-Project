import { createContext,useState } from "react";

export const AppContext=createContext();
export const AppProvider=({children})=> {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [visibleNewsId, setVisibleNewsId] = useState("");
<<<<<<< HEAD
    const [newsCategorytab, setNewsCategorytab] = useState("home");
    const [tabChanged, setTabChanged] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
=======
>>>>>>> parent of dd9d903 (cron job started)
    const [blog, setBlog] = useState({})
    const getVisibleNewsId=(newsId)=>{
        setVisibleNewsId(newsId);
    }
    return (
<<<<<<< HEAD
      <AppContext.Provider value={{ currentPage,setCurrentPage,newsCategorytab,setNewsCategorytab,isLoggedIn, setLoggedIn,getVisibleNewsId,setVisibleNewsId,visibleNewsId,setBlog,blog,tabChanged,setTabChanged}}>
=======
      <AppContext.Provider value={{ isLoggedIn, setLoggedIn,getVisibleNewsId,setVisibleNewsId,visibleNewsId,setBlog,blog}}>
>>>>>>> parent of dd9d903 (cron job started)
        {children}
      </AppContext.Provider>
    );
  };
  