import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Banner from './components/Banner';
import Explore from './components/explore';
import Amenities from './components/amenities'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Banner />
    <Explore />
    <Amenities />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
