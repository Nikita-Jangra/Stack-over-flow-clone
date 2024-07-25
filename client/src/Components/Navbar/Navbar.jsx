import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import logo2 from '../../Assets/logo2.png'     //  ../ is one step back directory
import search from '../../Assets/search.svg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button.jsx'
import { useSelector,useDispatch } from 'react-redux'
import {setCurrentUser} from '../../actions/currentUser.js'
import'./Navbar.css'
const Navbar = () => {
  var dispatch=useDispatch();
  var User = useSelector(state => (state.currentUserReducer))
  useEffect(() => {
   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }
  , [dispatch])   //after refresh the logout page does not changes to login page
  
  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='./' className='nav-item nav-logo'>
            <img src={logo2} alt='logo' width='140'/>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form>
          <input type='text' placeholder='search...'/>
          <img src={search} alt='search' width='20px'  className='search-icon'/>
        </form>
        {User === null? 
        <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
        <>
        <Avatar margin='4px' backgroundColor='#009dff' px='15px' py='10px' borderRadius="50%" color='white' textDecoration='none'><Link to='/' style={{color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='nav-item nav-links'>Log out</button>
        </>
         }
      </div>
    </nav>
  )
}

export default Navbar