import AdminHomepage from "../Pages/Adminhomepage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditNews from "../Pages/EditNews";

function AppState() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHomepage/>} />
          <Route path="/editnews" element={<EditNews/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppState