import React from 'react'
import './mission.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


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
        </div>
      </div>
    </div>
    
  )
}

export default Mission;