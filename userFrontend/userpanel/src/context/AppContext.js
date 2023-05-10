import { createContext,useState } from "react";

export const AppContext=createContext();
export const AppProvider=({children})=> {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [visibleNewsId, setVisibleNewsId] = useState("");
    const getVisibleNewsId=(newsId)=>{
        setVisibleNewsId(newsId);
    }
    return (
      <AppContext.Provider value={{ isLoggedIn, setLoggedIn,getVisibleNewsId,setVisibleNewsId,visibleNewsId}}>
        {children}
      </AppContext.Provider>
    );
  };
  