import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/style.css'

import Navbar from '../components/Navbar';
const MainLayout = () => {
  return (
    <div className='mainlayout'>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout