import React from 'react'
import './style2.css';
import person4 from "../../images/person4.GIF";
import minerals from "../../images/inwater.GIF"

const HeroBottom = () => {
  return (
    <div className='heroBottom_wrapper'>
        <div className='right'>
          <img src={person4}/>
        </div>
        <div className='leftSide'>
          <div className='quality_details'>
           <h2 className='header'>what is in the water</h2>
           <p className='satisfaction'>Check Water Quality</p>
           <p className='details'>
            AquaFlow is here to ensure you have access to clean drinking water from a water dispensing shop near you. The prices are affordable and also assuring you of access to clean and healthy water.
            Choose that which suits you best.
           </p>
          </div>
          <div>
           <img src={minerals}/>
          </div>
        </div>
    </div>
  )
}

export default HeroBottom;