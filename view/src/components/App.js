import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import Home from '../routes/Home/Home';
import Register from '../routes/Register/Register';
import Login from '../routes/Login/Login';
import ProductDetails from '../routes/ProductDetails/ProductDetails';
//import Orders from '../routes/Orders/Orders';
//import Account from '../routes/Account/Account';
import Cart from '../routes/Cart/Cart';
//import Checkout from '../routes/Checkout/Checkout';
//import OrderDetails from '../routes/OrderDetails/OrderDetails';
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
                  <Route exact path='/' element={<Home/>} />
                  <Route path='register' element={<Register/>} />
                  <Route path='/login' element={<Login/>}/>
                  <Route path="/products/:productId" element={<ProductDetails/>} />
                  {/* <Route path="/orders" element={<Orders/>} /> */}

                  {/* Private Routes */}
                  {/* <Route exact path='/account' element={<Account/>} /> */}
                  <Route exact path='/cart' element={<Cart/>} />
                  {/* <Route exact path='/checkout' element={<Checkout/>} /> */}
                  {/* <Route path="/orders/:orderId" element={<OrderDetails/>}/> */}

              </Routes>
          </BrowserRouter>
      </div>
    );
};

export default App;
