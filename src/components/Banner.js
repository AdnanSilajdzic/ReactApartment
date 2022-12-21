import React from 'react'
import Vijecnica from './images/vijecnica2.jpg'
const Banner = () => {
    
    
  return (
    <div>
      <div class="banner">
        <img id="banner_img" src={Vijecnica}></img>
        <h1 class="banner_txt" id="top_txt">Discover more about:</h1>
        <h1 class="banner_txt" id="word"></h1>
        <br></br>
        <a class="button-24" href="https://www.booking.com/hotel/ba/konak-apartment.hr.html">Book now</a>
    </div>
    </div>
  )
}

export default Banner
