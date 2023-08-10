import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(()=>console.log(store.getState()));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
    
);


reportWebVitals();