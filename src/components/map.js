import React from 'react'
import clockImg from './images/clock.png'
const map = () => {
    
  return (
    <div class="map">
            <h1 id="location_title">Our Location</h1>
            <img id="clock" class="float"src={clockImg}></img>
            <ul class="loc_list">
                <li id="sebilj">Sebilj</li>
                <li id="vijecnica">Viječnica</li>
                <li id="trebevic">Trebević cable car</li>
                <li id="tabija">Žuta Tabija</li>
                <li id="vatra">Vječna Vatra</li>
                <li id="carsija">Baščaršija</li>
            </ul>
            
        </div>
  )
}

export default map
