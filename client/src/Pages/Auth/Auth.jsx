import React, { useState } from 'react'
import './Auth.css'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup ,login} from '../../actions/auth'
import icon from '../../Assets/icon.png'
import AboutAuth from './AboutAuth.jsx'
const Auth = () => {
  const [isSignup, setisSignup] = useState(false);{ /*issignup is talking about signup page*/ }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleswitch =()=>{
    setisSignup(!isSignup)
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlesumbit =(e)=>{
     e.preventDefault()       // comment it out and click login button
     console.log({name,email,password})
     if(!email && !password){
      alert('Enter email and password')
     }
     if(isSignup){
      if(!name){
        alert('Enter the name to continue')
      }
      dispatch(signup({name,email,password},navigate))
     }else{
      dispatch(login({email,password},navigate))
     }
  }
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
       <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='Stack OverFlow' className='login-logo' width='80px'/>}
        <form onSubmit={handlesumbit}>
          {
            isSignup && <label htmlFor='name'>
              <h4>Display Name</h4>
              <input type='text' name='name' id='name' placeholder='Name' onChange={(e) =>{setName(e.target.value)}} />
            </label>
          }
           <label htmlFor='email'> {/*if htmlfor and id are same then box is highlighted when clicked on email*/}
            <h4>Email</h4>
          <input type='email' placeholder='Email address' name='email' id='email' autoFocus=''onChange={(e) =>{setEmail(e.target.value)}}  />
          </label>
          <label htmlFor='password'>
            <div style={{display:"flex" ,justifyContent:'space-between'}}>
            <h4>Password</h4>
            {!isSignup &&<h4 style={{color:"#007ac6" ,fontSize:"13px"}}>Forgot Password?</h4>} {/*if first condition is true then second will be also be true */}
            </div>
          <input type='password' placeholder='Password' name='password' id='password' autoFocus='' onChange={(e) =>{setPassword(e.target.value)}} />
          {
            isSignup && <p style={{color:"grey", fontSize:"13px"}}>Passwords must contain at least eight<br/> characters including 1 letter and 1<br/>number.</p>
          }
          </label>
          {isSignup && <label htmlFor='check'>
              <input type='checkbox' id='check'/>
              <p style={{fontSize:"13px"}}>Opt-in to receive occasional,<br/>product updates user research invitations,<br/> company annoucements, and digest</p>
            </label>
          }
          <button type='Submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log in'}</button>
          {
            isSignup && 
            <p style={{color:"#666767", fontSize:"13px"}}>By clicking "Signup", you agree to our 
              <span style={{color:"#007ac6"}}>terms of <br/>and condition </span>,
              <span style={{color:"#007ac6"}}>privacy policy</span>, 
              <span style={{color:"#007ac6"}}>cookie policy</span></p>
          }
        </form>    {/*if sign up page is there then signup will written */}{/*if sign up page is not there then login will written */} 
        <p>        
          {isSignup ? "Already have an account ?":"Doesn't have an account? "}
          <button className='handle-switch-btn' onClick={handleswitch}>{isSignup ? 'Login' :'Sign up'}</button>
        </p>
       </div>
    </section>
    
  )
}
export default Auth
