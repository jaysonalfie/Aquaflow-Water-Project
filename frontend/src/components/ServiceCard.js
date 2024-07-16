import React from 'react'
import waterb1 from '../images/waterb1.jpg';
import './style.css';
import {useNavigate} from 'react-router-dom'

const ServiceCard = (props) => {
  //passing down props from the parent which is home down to the child which is ServiceCard

  const { shopName, shopLocation, shopNo } = props;

  const navigate = useNavigate();
  const handleNavigation = (path)=>{
    navigate(path)
  }

  return (
    <div className='servicecard'>
        <img src={props.shopImage} alt='shop'/>
       <div>
        <p className='shopName'>{shopName}</p>
        <p className='shopLocation'>Location:{shopLocation}</p>
        <p className='shopNo'> Phone:{shopNo}</p>
        <button className='btn4' onClick={()=>handleNavigation('/shop')}>discover</button>
       </div>
    </div>
  )
}

export default ServiceCard