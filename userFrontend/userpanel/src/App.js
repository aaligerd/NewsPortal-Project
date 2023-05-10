import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import SinglePostPage from "./Pages/SinglePostPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/post" element={<SinglePostPage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
