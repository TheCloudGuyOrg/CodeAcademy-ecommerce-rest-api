import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div style={{flex: 1}}>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/products/:productId" component={ProductDetails}/>
          <Route path="/register" component={Register}/>
          <Route path="/orders" component={Orders}/>

          {/* Private Routes */}
          <PrivateRoute exact path='/account' Component={Account} />
          <PrivateRoute exact path='/cart' Component={Cart} />
          <PrivateRoute exact path='/checkout' Component={Checkout} />
          <PrivateRoute exact path='/orders' Component={Orders} />
          <PrivateRoute exact path='/orders/:orderId' Component={OrderDetails} />

          <Navigate from='*' to='/'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
