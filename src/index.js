import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Banner from './components/Banner';
import Explore from './components/explore';
import Amenities from './components/amenities';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Review from './components/Reviews';
import History from './components/history';
import Contact from './components/Contact';
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
    <Contact />
  </div>
);

reportWebVitals();
