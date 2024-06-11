import React ,{useContext}from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/style.css'
import { AuthContext } from '../components/AuthContext';

import Navbar from '../components/Navbar';
const MainLayout = () => {
  //ensures component renders nav links based on user being authenticated
  
  const {isAuthenticated} = useContext(AuthContext)

  return (
    <div className='mainlayout'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout