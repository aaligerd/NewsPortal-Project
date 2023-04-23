import './App.css';
import AdminLoginPage from './Pages/AdminLoginPage';
import Adminhomepage from './Pages/Adminhomepage';
import DemoTest from './Pages/DemoTest';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLoginPage />} />
          <Route path="/admin" element={<Adminhomepage />} />
          <Route path="/user/:id" element={<DemoTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
