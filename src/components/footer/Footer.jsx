import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col-sm-1'></div>
        <div className='brand-name col-sm-3'>
          <p>CS Bridge</p>
          <p>Stanford University</p>
        </div>
        <div className='footer-links1 col-sm-2'>
          <p>About</p>
          <p>Project</p>
          <p>Courses</p>
        </div>
        <div className='footer-links2 col-sm-2'>
          <p>News</p>
          <p>Contact</p>
        </div>
        <div className='contact-detail col-sm-3'>
          <p>Adress</p>
          <p>Email</p>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  )
}

export default Footer