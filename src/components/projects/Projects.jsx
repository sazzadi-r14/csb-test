import React from 'react';
import './projects.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import projects1 from '../../assets/projects1.png';

const Projects = () => {
  return (
    <div className='row projects'>
      <div className='col-sm-1'></div>
      <div className='col-sm-10'>
        <div className='projects-title'>
          <p>Projects</p>
        </div>
        <div className='projects-text'>
          <p>We have a rich library <br/>of project to <br/>collaborate on</p>
        </div>
        <div className='row pj-box'>
          <div className='col-sm-6'>
            <img className='pj-img' src= {projects1} alt="Laptop with bunch of code on the screen" />
          </div>
          <div className='col-sm-6'>
            <div className='pj-name'>
              <p>CSB Classic</p>
              <hr className='hr'/>
            </div>
            <div className='pj-details'>
              <p>The CS Bridge Classic program offers intensive two-week in-person courses for high school students at different universities around the world. Each course is hosted by a well-known university in the host country. 100-200 high school students live on campus for two weeks and attend classes every day. The curriculum is based on the same course Stanford University teaches our Freshmen, CS106A. Our goal is to teach the same material to high school students worldwide, in-person, in small group settings. </p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-1'></div>
    </div>

  )
}

export default Projects