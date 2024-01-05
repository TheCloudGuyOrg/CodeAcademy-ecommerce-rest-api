import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from '../routes/Home/Home';
import Register from '../routes/Register/Register';
import Login from '../routes/Login/Login';
//import PrivateRoute from './PrivateRoute/PrivateRoute';
import Account from '../routes/Account/Account';

function App() {
  return (
    <div style={{flex: 1}}>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home/>} />
          <Route path='register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
