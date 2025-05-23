import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Make sure it's importing from App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* This renders your TechWeekApp */}
  </React.StrictMode>
);

reportWebVitals();
