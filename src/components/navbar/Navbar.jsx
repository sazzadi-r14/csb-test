import React from 'react';
import { RimMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='csb__navbar'>
      <div className='csb__navbar-links'>
        <div className='csb__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='csb__navbar-links_container'>
          <p><a href="#home">About</a></p>
          <p><a href="#home">Projects</a></p>
          <p><a href="#home">Courses</a></p>
          <p><a href="#home">News</a></p>
          <p><a href="#home">Impacts</a></p>
        </div>

      </div>
    </div>
  )
}

export default Navbar;