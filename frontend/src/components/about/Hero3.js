import React from 'react'
import './style2.css'
import guy1 from "../../images/mguy1.GIF";
import guy2 from "../../images/mguy2.GIF";
import guy3 from "../../images/mguy3.GIF";

const Hero3 = () => {
  return (
    <div className='hero3-wrapper'>
        <div>
         <h2 className='header'>valuing your needs</h2>
         <p className='satisfaction'>Our dedicated Team Members</p>
        </div>
        <div className='team_columns'>
           <div>
           <img src={guy1}/>
            <span>
              <h2>Mr. Stan</h2>
              <p>Co-ordinator</p>
            </span>
           </div>
           <div>
           <img src={guy2}/>
            <span>
              <h2>Mr. Melvin</h2>
              <p>Delivery Logistics</p>
            </span>
           </div>
           <div>
           <img src={guy3}/>
            <span>
              <h2>Mr. Alfie</h2>
              <p>Founder</p>
            </span>
           </div>
        </div>
    </div>
  )
}

export default Hero3