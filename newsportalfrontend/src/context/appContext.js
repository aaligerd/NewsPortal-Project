import React, { createContext, useState } from "react";
export const AppContext = createContext();
export const AppPovider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [editableNewsId, setEditableNewsId] = useState();
  const getEditableNewsId=(newsId)=>{
    setEditableNewsId(newsId);
  }
  return (
    <AppContext.Provider value={{ isLoggedIn, setLoggedIn,getEditableNewsId,setEditableNewsId,editableNewsId}}>
      {children}
    </AppContext.Provider>
  );
};
