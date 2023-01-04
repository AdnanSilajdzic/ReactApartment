import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Banner from './components/Banner';
import Explore from './components/explore';
import Amenities from './components/amenities';
import Gallery from './components/Gallery';
import Map from './components/map';
import Review from './components/reviews';
import History from './components/history';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Banner />
    <Explore />
    <Amenities />
    <Gallery />
    <Map />
    <Review />
    <History />
  </div>
);

reportWebVitals();
