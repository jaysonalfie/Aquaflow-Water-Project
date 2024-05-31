import React from 'react'
import waterdrop from "../../images/waterdrop.jpeg";
import waterflask from "../../images/waterflask.jpeg";
import recycle from "../../images/recycle.jpeg";
import waterlevel from "../../images/waterlevel2.jpeg";
import './style2.css'

const Hero2 = () => {
  return (
    <div className='hero2_wrapper'>
        <div className='heading2'>
        <h2 className='header'>Why trust our name</h2>
        <p className='satisfaction'>We are a trusted name in the bottle industry</p>

        </div>
        <div className='trust-columns'>
        <div>
            <img src={waterdrop}/>
            <span>
                <h2>Assured purity</h2>
                <p>Water sources are well certified and approved</p>
            </span>
        </div>
        <div>
            <img src={waterflask}/>
            <span>
                <h2>Chlorine free</h2>
                <p>Get water that is safe for drinking</p>
            </span>
        </div>
        <div>
            <img src={recycle}/>
            <span>
                <h2>Recyling steps</h2>
                <p>Water bottles are recyled ensuring environment conservation</p>
            </span>
        </div>
        <div>
            <img src={waterlevel} className='waterlevel'/>
            <span>
                <h2>Healthy water</h2>
                <p>Well maintained water for consumption</p>
            </span>
        </div>

          
          
        </div>
    </div>
  )
}

export default Hero2