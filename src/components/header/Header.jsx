import React from 'react'
import './header.css'


import { RimMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';



const Header = () => {
  return (
    <div className='csb__header'>
      <div className='csb__header-links'>
        <div className='csb__header-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='csb__header-links_container'>
          <p><a href="#home">About</a></p>
          <p><a href="#home">Projects</a></p>
          <p><a href="#home">Courses</a></p>
          <p><a href="#home">News</a></p>
          <p><a href="#home">Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Header;