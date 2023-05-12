import { createContext,useState } from "react";

export const AppContext=createContext();
export const AppProvider=({children})=> {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [visibleNewsId, setVisibleNewsId] = useState("");
    const [newsCategorytab, setNewsCategorytab] = useState("home");
    const [tabChanged, setTabChanged] = useState(true);
    const [currentPage, setCurrentPage] = useState(1)
    const [blog, setBlog] = useState({})
    const getVisibleNewsId=(newsId)=>{
        setVisibleNewsId(newsId);
    }
    return (
      <AppContext.Provider value={{ currentPage,setCurrentPage,newsCategorytab,setNewsCategorytab,isLoggedIn, setLoggedIn,getVisibleNewsId,setVisibleNewsId,visibleNewsId,setBlog,blog,tabChanged,setTabChanged}}>
        {children}
      </AppContext.Provider>
    );
  };
  