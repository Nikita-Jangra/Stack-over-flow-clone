import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import globe from '../../Assets/globe.webp'
const LeftSidebar = () => {
  return (                                       //NavLink are same as Link
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
            <div><p>PUBLIC</p></div>
            <NavLink to='/Questions' className='side-nav-links' >
                <img src={globe} alt='globe' height='30px' width='30px'/>
                <p>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:'40px'}}>
                <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className='side-nav-links' activeClassName='active'  style={{paddingLeft:'40px'}}>
                <p>Users</p>
            </NavLink>
            </div>
        </nav>
      
    </div>
  )
}

export default LeftSidebar
