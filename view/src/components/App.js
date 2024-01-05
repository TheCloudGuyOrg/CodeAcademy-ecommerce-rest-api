import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import Home from '../routes/Home/Home';
import Register from '../routes/Register/Register';
import Login from '../routes/Login/Login';
import Account from '../routes/Account/Account';
import { checkLoginStatus } from '../store/auth/Auth.actions';
import './App.css';

function App() {
    const dispatch = useDispatch();

    // Load user cart on entry to app
    useEffect(() => {
        async function isLoggedIn() {
          await dispatch(checkLoginStatus());
        }

        isLoggedIn();
    }, [dispatch])

  return (
      <div style={{flex: 1}}>
          <BrowserRouter>
          <Header />
              <Routes>
                  {/* Public Routes */}
                  <Route path='/' element={<Home/>} />
                  <Route path='register' element={<Register/>} />
                  <Route path='/login' element={<Login/>}/>

                  {/* Private Routes */}
                  <Route exact path='/account' element={<Account/>} />


              </Routes>
          </BrowserRouter>
      </div>
    );
};

export default App;
