import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import reportWebVitals from './reportWebVitals';
import WebRoutes from './routes/WebRoutes';

ReactDOM.render(
  <React.StrictMode>
   <WebRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
