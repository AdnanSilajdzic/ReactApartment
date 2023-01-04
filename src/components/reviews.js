import React from 'react'
import reviewImg from './images/review.png'
const reviews = () => {
      
  return (
    <div class="reviews">
            <h1 id="review">Our rating is</h1>
            <img src={reviewImg} class="review_img" id="review_img"></img>
            <h2 id="value">0</h2>
            <h3 class="outtaten" id="outtaten">out of ten on <a href="https://www.booking.com/hotel/ba/konak-apartment.hr.html#tab-reviews">booking.com</a></h3>
        </div>
  )
}

export default reviews
