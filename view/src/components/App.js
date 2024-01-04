import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from '../routes/Home/Home';
import Register from '../routes/Register/Register';

function App() {
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
