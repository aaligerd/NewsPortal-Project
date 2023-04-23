import React,{createContext,useState} from "react";
export const AdminContext=createContext();
export const AdminPovider=({children})=>{
    const [name, setName] = useState("Subhradip");
    const [tabName, setTabName] = useState("Home")
    return <AdminContext.Provider value={{name,setName,tabName,setTabName}}>{children}</AdminContext.Provider>
}