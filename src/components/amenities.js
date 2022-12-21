import React from 'react'
import apartmentImg from './images/apartment1.jpg'
import bedImg from './images/bed.png'
const amenities = () => {

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
    <div>
      <img class="desc_img" src={apartmentImg}></img>
    <div class="description">
        <h1 id="amenities">Our amenities include</h1>
        <img id="img11" class="reveal" src={bedImg}></img>
        <img id="img12" class="reveal" src="assets/images/air-conditioning.png"></img>
        <img id="img13" class="reveal" src="assets/images/toilet.png"></img>
        <img id="img14" class="reveal" src="assets/images/parking.png"></img>
        <img id="img15" class="reveal" src="assets/images/wifi.png"></img>
        <img id="img16" class="reveal" src="assets/images/cutlery.png"></img>
        <p id="txt11" class="reveal">Two bedrooms</p>
        <p id="txt12" class="reveal">Air conditioning</p>
        <p id="txt13" class="reveal">Private toilet</p>
        <p id="txt14" class="reveal">Free Parking</p>
        <p id="txt15" class="reveal">Free Wifi</p>
        <p id="txt16" class="reveal">Kitchen</p>
    </div>
    </div>
  )
}

export default amenities
