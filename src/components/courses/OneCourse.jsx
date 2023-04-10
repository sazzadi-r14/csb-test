import React from 'react'
import './courses.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import arrowbutton from '../../assets/arrow-button.png';

const OneCourse = (props) => {
  return (
      <a href={props.url} target="_blank">
      <div className = 'row'>
          <div className = 'col-sm-1 oc_sl'>{props.sl}</div>
          <div className = 'col-sm-10 oc_name'>{props.name}</div>
          <div className = 'col-sm-1'>
            <img className = 'oc_button_img' src = {arrowbutton} alt = "Arrow Button"/>
          </div>
      </div>
      <hr/>
      </a>
  )
}

export default OneCourse;     