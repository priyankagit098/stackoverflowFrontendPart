import React, {useState} from 'react'
import "./Auth.css"
import icons from "../../assessts/icons.png"
import AboutAuth from './AboutAuth'

import { login, signup } from '../../actions/auth'

import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"

const Auth = () => {
 
    const dispatch= useDispatch();
    const navigate= useNavigate()

  const [isSignUp, setIsSignUp]= useState(false)
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  



 const handleSwitch =() => {
  setIsSignUp(!isSignUp)
 }


 const handleSubmit =(e) => {
  e.preventDefault()
   if(!email || !password) {
    alert('Enter email and Password')
  }
  if (isSignUp) {
    if (!name) {
      alert('Enter a name to continue')
    }
    dispatch(signup({name, email, password}, navigate))

  } 
  else {
    dispatch(login({email,password}, navigate))
  }
 
 }




  return (
    
    <div>
      <section className='auth-section'>
            {isSignUp ? <AboutAuth/> : ""}
            <div className='auth-container-2'>
                {!isSignUp ? <img src={icons} alt="stack overflow" className='login-logo'/> : ""}
                <form onSubmit={handleSubmit}>
                    {isSignUp ? <>
                        <label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type="text" name='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
                        </label>
                        
                        <label htmlFor='email'>
                            <h4>Email</h4>
                            <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                        </label>
                    </>
                    :
                    <label htmlFor='email'>
                        <h4>Email</h4>
                        <input type="email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                    }
                    <label htmlFor='password'>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h4>Password</h4>
                            {!isSignUp ? <p style={{color: "#007ac6", fontSize: "13px"}}>forgot password?</p> : ""}
                        </div>
                        <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                        {isSignUp ?
                            <p style={{color: "#666767", fontSize: "13px"}}>
                                Passwords must contain at least eight <br/>characters, including at least 1 letter and 1<br/> number.
                            </p>
                        : ""}
                    </label>
                    {isSignUp ?
                        <div className="checked">
                        <label htmlFor="check"></label>
                            <input type="checkbox" id='check' className="checkbox"/>
                            <p style={{fontSize: "13px"}} className="para">Opt-in to receive occasional product<br/> updates, user research invitations, company<br/> announcements, and digests.</p>
                        </div>
                    : ""}
                    
                    
                    <button type='submit' className='auth-btn'>{!isSignUp?'Log In':'Sign Up'}</button>
                </form>
                    {isSignUp ?
                        <p style={{color: "#666767", fontSize: "13px"}}>
                            By clicking ???Sign up???, you agree to our
                            <span style={{color: "#007ac6"}}> terms of<br/> service</span>,
                            <span style={{color: "#007ac6"}}> privacy policy </span>
                            and<span style={{color: "#007ac6"}}> cookie policy</span>
                        </p>
                    : ""}
                <p>
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp ? "Log In" : "Sign Up"}</button>
                </p>
                
            </div>

        </section>
    </div>
  )
}

export default Auth