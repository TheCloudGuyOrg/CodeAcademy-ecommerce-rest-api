import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import { useDispatch } from 'react-redux';
import Home from '../routes/Home/Home';
import Register from '../routes/Register/Register';
import { checkLoginStatus } from '../store/auth/Auth.actions';

function App() {
  const dispatch = useDispatch();

  // Load user cart on entry to app
  useEffect(() => {
    async function isLoggedIn() {
      await dispatch(checkLoginStatus());
    }

    isLoggedIn();
  }, [dispatch]);

  return (
    <div style={{flex: 1}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
