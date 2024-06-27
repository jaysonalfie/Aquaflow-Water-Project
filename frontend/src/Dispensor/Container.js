import React from 'react'
import './Container.css'
import TopContainer from './TopContainer'
import MainContainer from './MainContainer'

const Container = () => {
  return (
    <div className='container'>
    <TopContainer/>
    <MainContainer/>
    </div>
  )
}

export default Container