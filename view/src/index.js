import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './store/rootReducer';
import './index.css';

//import { createRoot } from 'react-dom/client';
//const root = createRoot(document.getElementById('root'));

// Initializes redux store
const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);