import React, {useState} from 'react'
import reviewImg from './images/review.png'
const Reviews = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight+140;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  

  window.addEventListener("scroll", reveal);
  return (
    <div class="reviews">
            <center><h1 id="review">Our rating is</h1></center>
            <img src={reviewImg} class="review_img" id="review_img" onClick={()=>
            {var obj = document.getElementById("value");
            var current = 0;
            setInterval(function(){
                if (obj.innerHTML==="9.8"){
                    return;
                }
                else {
                    current+=0.1;
                    obj.innerHTML = current.toFixed(1);
                }
            },30);
            var review = document.getElementById("review_img");
            var value = document.getElementById("value");
            var ten = document.getElementById("outtaten");
            review.classList.add("active");
            value.classList.add("active");
            ten.classList.add("active");}
            }></img>
            <h2 id="value">0</h2>
            <h3 class="outtaten" id="outtaten">out of ten on <a href="https://www.booking.com/hotel/ba/konak-apartment.hr.html#tab-reviews">booking.com</a></h3>
        </div>
  )
}

export default Reviews
