import React from 'react';
import './courses.css';

import OneCourse from './OneCourse.jsx';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import courses1 from '../../assets/courses1.png';
import data from '../../data/courses.json';



const Courses = () => {

  return (
    <div className = 'row'>
        <div className = 'col-sm-1'></div>
        <div className = 'col-sm-10 cs_body'>

          {/* Courses Body */}
          <div className = 'row'>

            {/* Courses Left Section */}
            <div className = 'col'>

              {/* Course Title */}
              <div className = 'cs_title col-sm-12'>
                Courses
              </div>

              {/* Course Slogan */}
              <div className = 'cs_slogan col-sm-12'>
                Learn from a<br/>rich library of<br/>courses
              </div>

              {
                data.map((course)=>
                  <OneCourse sl={course.sl.toString()} name={course.name} url={course.url}/>
                )
              }
              
            </div>

            {/* Courses Image */}
            <div className = 'col'>
              <img className = 'cs_img' src = {courses1} alt = "A person doing coding"/>
            </div>

          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
  )
}

export default Courses;