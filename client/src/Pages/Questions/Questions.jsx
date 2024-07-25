import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar.jsx'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar.jsx'
import RightSidebar from '../../Components/RightSidebar/RightSidebar.jsx'
import '../../App.css'
const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default Questions
