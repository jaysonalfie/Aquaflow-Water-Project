import React from 'react'
import bottle from "../images/bottledesign.jpg"
import '../components/style.css'

const WaterCard = () => {
  return (
    <div className='waterContainer'>
     <img src={bottle} className='bottle'/>
     <p>soft drinking water</p>
     <p>Gain access to this valuable resource</p>

    </div>
  )
}

export default WaterCard