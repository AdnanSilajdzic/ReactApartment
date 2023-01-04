import React, { useState } from 'react'
import image1 from './images/apartment1.jpg'
import image2 from './images/apartment2.jpg'
import image3 from './images/apartment3.jpg'
import image4 from './images/apartment4.jpg'
const Gallery = () => {
    var images = [image1, image2, image3, image4];
    const [count, setCount] = useState(0);
  return (
    <div class="gallery_t">
        <h1 id="gallery_title">Gallery</h1>
        <div class="container reveal">
            <button id="left-btn" onClick={() => count<1 ? setCount(3) : setCount(count-1) }><i class="arrow"></i></button>
            <img id="carousel" src={images[count]} alt=""></img>
            <button id="right-btn" onClick={() => count>2 ? setCount(0) : setCount(count+1) }><i class="arrow"></i></button>
        </div>
    </div>
  )
}

export default Gallery
