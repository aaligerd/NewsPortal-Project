import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLoginpage from '../Pages/AdminLoginPage';
import ForgetPassword from '../Pages/ForgetPassword';

function AuthState() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLoginpage/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default AuthState