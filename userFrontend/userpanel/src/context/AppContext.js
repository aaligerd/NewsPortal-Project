import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [visibleNewsId, setVisibleNewsId] = useState("");
  const [loadNextNews, setLoadNextNews] = useState(false);
  const [blog, setBlog] = useState({});
  const getVisibleNewsId = (newsId) => {
    setVisibleNewsId(newsId);
  };
  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        getVisibleNewsId,
        setVisibleNewsId,
        visibleNewsId,
        setBlog,
        blog,
        loadNextNews,
        setLoadNextNews
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
