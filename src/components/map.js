import React, { useState } from 'react'
import clockImg from './images/clock.png'
const Map = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div class="map">
            <h1 id="location_title">Our Location</h1>
            <img id="clock" class="float"src={clockImg}></img>
            <ul class="loc_list">
                <li id="sebilj" onClick={() => setCount(5) }>Sebilj</li>
                <li id="vijecnica" onClick={() => setCount(5)}>Viječnica</li>
                <li id="trebevic" onClick={() => setCount(6)}>Trebević cable car</li>
                <li id="tabija" onClick={() => setCount(17)}>Žuta Tabija</li>
                <li id="vatra" onClick={() => setCount(4)}>Vječna Vatra</li>
                <li id="carsija" onClick={() => setCount(13)}>Baščaršija</li>
            </ul>
            <p id="test" style={{color: "white",}}>{count==0 ? "Click on a location!" : count+" minutes away!"}</p>
            <iframe style={{width:"40%", height:"65%", position:"relative", left:"55%"}} id="gmap_canvas" src="https://maps.google.com/maps?q=konak%203&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
  )
}

export default Map
