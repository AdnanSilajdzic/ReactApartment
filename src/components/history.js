import React from 'react'
import tin from './images/tin.png'
const history = () => {
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
    <div class="history">
    <img id="tin" src={tin}></img>
    <center><h1>Our History</h1></center>
    <p id="par1" class="reveal">The building in which this apartment is located was built during the ottoman empire
     and can be seen on paintings of Sarajevo which are 400 years old
    </p>
    <p id="par2" class="reveal">A famous author named Tin Ujevic used to live in this building</p>
    <p id="par3" class="reveal">This house can be seen in a popular Bosnian movie called "Valter Brani Sarajevo"</p>
 </div>
  )
}

export default history
