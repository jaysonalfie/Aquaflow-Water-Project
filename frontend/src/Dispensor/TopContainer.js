import React from 'react';
import {  BiSearchAlt2 ,BiBell} from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import Woman from '../images/perso n2.GIF'

const TopContainer = () => {
  return (
    <div className='topContainer'>
       <div>
        <h2>Dashboard</h2>
       </div>
       <div className='searchBox'>
         <input
           type='text'
           placeholder='Search here'
           />
           <i>
              <BiSearchAlt2/>
           </i>
           

       </div>
       <div className='profileContainer'>
       
       <i className='profileIcon'><BiBell/></i>
       <i className='profileIcon'><BsChatLeftDots/></i>
       <div className='profileImage'>
        <img src={Woman}alt=''/>
       
       </div>


       </div>

    </div>
  )
}

export default TopContainer