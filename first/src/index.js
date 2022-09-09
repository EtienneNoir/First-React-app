import React from 'react';
import ReactDOM from 'react-dom/client'; //Only called once, it is used to render the components and the entire application, into the real dom, the div with the id of root
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 // This file is the starting point of every React, JS application 

const root = ReactDOM.createRoot(document.getElementById('root')); // This is how we are accessing the actual dom 
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
