import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/aquaflowlogo.png"
import { FaSignOutAlt,  FaCog,  FaUserFriends ,FaMoneyBillWave } from "react-icons/fa";
import { BsBag,  BsColumnsGap } from "react-icons/bs";
import './menu.css'


const DisMenu = () => {
  return(
    <menu>
        <img src={Logo}alt=""/>
        <ul id='mainMenu'>
            <div className='menuItem'>
                <Icon icon={<BsColumnsGap/>}/>
                <span>
                <p>dashboard</p>
                </span>
            </div>
            <div className='menuItem'>
                <Icon icon={<FaUserFriends/>}/>
                <span>
                <p>Customers</p>
                </span>
            </div>
            <div className='menuItem'>
                <Icon icon={<BsBag/>}/>
                <span>
                <p>products</p>
                </span>
            </div>
            <div className='menuItem'>
                <Icon icon={<FaMoneyBillWave/>}/>
                <span>
                <p>revenue</p>
                </span>
            </div>
            <div className='menuItem'>
                <Icon icon={<FaCog/>}/>
                <span>
                <p>settings</p>
                </span>
            </div>
        </ul>
        <ul className='bottomMenu'>
        <div className='menuItem'>
                <Icon icon={<FaSignOutAlt/>}/>
                <span>
                <p>logout</p>
                </span>
            </div>

        </ul>
    </menu>
  )
  
}

const Icon = ({icon})=> (
    <li>
        <Link to='#'>{icon}</Link>
    </li>
)

export default DisMenu