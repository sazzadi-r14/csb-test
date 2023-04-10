import React from 'react'
import './impact.css'
import impact1 from '../../assets/impact1.png'

const Impact = () => {
  return (
    <div className="row impact">
      <div className='col-sm-1'></div>
      <div className="col-sm-12">
        <div className="impact-title">
          <p>Impact</p>
        </div>
        <div className="impact-text">
        <p>we have reached enthusiasts in<br/> 156 countries from 7<br/> continents</p>
        </div>
        <div className='impact-img'>
          <img src= {impact1} alt="A world map" />
        </div>
        <div className='impact-details'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className='col-sm-1'></div>

    </div>
  );
};

export default Impact