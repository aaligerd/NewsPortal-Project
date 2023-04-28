import './App.css';
import React,{useContext} from "react";
import Adminhomepage from './Pages/Adminhomepage';
import { AppContext} from './context/appContext';
import AuthState from './State/AuthState';
function App() {
  const  {isLoggedIn}=useContext(AppContext);
  return (
    <>
      {isLoggedIn?<Adminhomepage/> : <AuthState/>}
    </>
  );
}

export default App;
