import './App.css';
import React,{useContext} from "react";
import Adminhomepage from './Pages/Adminhomepage';
import { AppContext} from './context/appContext';
import AuthState from './State/AuthState';
import AppState from './State/AppState';
function App() {
  const  {isLoggedIn}=useContext(AppContext);
  return (
    <>
      {isLoggedIn?<AppState/> : <AuthState/>}
    </>
  );
}

export default App;
