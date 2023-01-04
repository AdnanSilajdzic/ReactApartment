import React from 'react';
import Vijecnica from './images/vijecnica2.jpg';
import Typewriter from 'typewriter-effect/dist/core';
const Banner = () => {
  var wordAnimation = document.getElementById("word");
  var typewriter = new Typewriter(wordAnimation, {
    loop: true,
    delay: 75,
    strings: ['Our Apartment', 'Sarajevo', 'The old town'],
    autoStart: true,
  });
  return (
    <div>
      <div class="banner">
        <img id="banner_img" src={Vijecnica}></img>
        <h1 class="banner_txt" id="top_txt">Discover more about:</h1>
        <h1 class="banner_txt" id="word">Our Apartment</h1>
        <br></br>
        <a class="button-24" href="https://www.booking.com/hotel/ba/konak-apartment.hr.html">Book now</a>
    </div>
    </div>
  )
}

export default Banner
