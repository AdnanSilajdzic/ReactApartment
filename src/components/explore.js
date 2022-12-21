import React from 'react'
import infoImg from './images/info.png'
import imageImg from './images/image.png'
import mapImg from './images/map.png'
import feedbackImg from './images/feedback.png'
import parchmentImg from './images/parchment.png'
import contactImg from './images/contact.png'
const explore = () => {
  return (
    <div class="explore">
        <h1>Explore</h1>
        <a href="#amenities">
        <img id="img1" src={infoImg}></img></a>
        <p>Description</p>
        <a href="#gallery_title">
        <img id="img2" src={imageImg}></img></a>
        <p id="g-icon-txt">Gallery</p>
        <a href="#location_title">
        <img id="img3" src={mapImg}></img></a>
        <p id="m-icon-txt">Map</p>
        <a href="#review">
        <img id="img4" src={feedbackImg}></img></a>
        <p id="r-icon-txt">Reviews</p>
        <a href="#tin">
        <img id="img5" src={parchmentImg}></img></a>
        <p id="h-icon-txt">History</p>
        <a href="#contact">
        <img id="img6" src={contactImg}></img></a>
        <p id="c-icon-txt">Contact</p>
    </div>
  )
}

export default explore
