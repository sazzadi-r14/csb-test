import React from 'react'
import './mission.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import mission1 from '../../assets/mission1.png';
import mission2 from '../../assets/mission2.png';
import mission3 from '../../assets/mission3.png';


const Mission = () => {
  return (
    <div>
      <div className = 'row'>
        <div className = 'col-sm-2'></div>
        <div className = 'col-sm-8 ms_body'>

          {/* Mission */}
          <div className = 'ms_title col-sm-12'>
            Mission
          </div>

          {/* Mission Slogan */}
          <div className = 'ms_slogan col-sm-12'>
            Helping scale up high-quality<br/>human-centric computer<br/>science education
          </div>

          {/* Mission Priorities */}
          <div className = 'ms_priorities_title col-sm-12'>
            We have two main priorities that drive<br/>the work we do
          </div>

          {/* Mission Priorities Details */}
          <div className = 'row ms_priorities_details'>

            {/* Mission Instruction */}
            <div className = 'col'>
              <div className = "ms_text col-sm-4">Instruction</div>
              <img className = 'ms_img' src = {mission1} alt = "A women instrucitng on a whiteboard"/>
            </div>

            {/* Mission Innovation */}
            <div className = 'col'>
              <img className = 'ms_img' src = {mission2} alt = "A bulb"/>
              <div className = "ms_text col-sm-4">Innovation</div>
            </div>

          </div>
        </div>
        <div className='col-sm-2'></div>
      </div>

      <div className = 'col-sm-12'>
        <img className = 'ms_img' src = {mission3} alt = "A person working in a laptop"/>
      </div>
    </div>
    
  )
}

export default Mission