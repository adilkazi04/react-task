import React from 'react'
import '../assets/style/Navbar.css';
import logo from '../assets/images/logo.png'
import '../assets/style/style.css'

const Navbar = () => {
  return (
    <>
<nav>
  <input id="nav-toggle" type="checkbox" />
  <div className="logo"><a href="#"><img src={logo} alt="burak electric logo" /></a>
  </div>
  <ul className="links">
    <li><a href="#">Home</a></li>
   
    <li><a href="#">About Us</a></li>
    
    <li><a href="#">Courses</a></li>
    
    <li><a href="#">Contact Us</a></li>
    
    <li><a href="#" className="nav-contact">Join Class</a></li>
    <li><a href="#" className="nav-contact">Book a free Trail</a></li>
  </ul>
  <label htmlFor="nav-toggle" className="icon-burger">
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </label>
</nav>

    </>

  )
}

export default Navbar