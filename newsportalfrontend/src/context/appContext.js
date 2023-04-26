import React,{createContext,useState} from "react";
export const AppContext=createContext();
export const AppPovider=({children})=>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    return <AppContext.Provider value={{isLoggedIn,setLoggedIn}}>{children}</AppContext.Provider>
}