import React , {useCallback, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/aquaflowlogo.png"
import { FaSignOutAlt,  FaCog,  FaUserFriends ,FaMoneyBillWave } from "react-icons/fa";
import { BsBag,  BsColumnsGap } from "react-icons/bs";
import './menu.css'


const DisMenu = () => {
 
    //this hook allows creation a mutable reference which allows manipulation without re-rendering of the component
    //clicking on an item sets it as active, visually differentiating it from other items.
    const mainMenuRef = useRef(null);


     //function responsible for assigning the active class
     const changeActive = useCallback((event)=> {
        const mainMenuLi = mainMenuRef.current?.querySelectorAll('li');
         if (mainMenuLi){
            mainMenuLi.forEach((li, index)=> li.classList.remove('active'));
            event.currentTarget.classList.add('active')

         }

     }, []); 
     

     //hook to add event listeners after the component had been rendered
     useEffect(()=>{

        const mainMenuLi = mainMenuRef.current?.querySelectorAll('li');
        if (mainMenuLi){
            //adding click event listeners to each li element
            mainMenuLi.forEach((li,index)=> li.addEventListener('click', changeActive));
        }
        
        //clean up function to remove event listeners when component unmounts
        return () => {
            if(mainMenuLi){
                mainMenuLi.forEach((li,index)=> li.removeEventListener('click', changeActive));
        }
            }
        
     }, [changeActive]);
     
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

//creating an Icon component that receives an 'icon' prop
const Icon = ({icon})=> (
    <li>
        <Link to='#'>{icon}</Link>
    </li>
)

export default DisMenu