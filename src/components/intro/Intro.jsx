import React from 'react';
import './intro.css';
import "../../assets/fonts/fonts.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container landing-container">
        <div className="row w-100">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.733)', borderRadius: '1rem'}}>
                <div className="card-body">
                  <h1 className="card-title text-center" style={{fontFamily: 'Cinzel', fontSize: '4rem',}}>CS Bridge</h1>
                  <h5 className="card-subtitle mb-2 text-muted text-center" style={{fontFamily: 'Cinzel', fontSize: '2rem',}}>
                    A cross-university program by Stanford
                  </h5>
                  <hr />
                  <p className="card-text text-center" style={{fontFamily: 'Open-Sans', fontSize: '1.2rem',}}>
                  CS Bridge is a Stanford University initiative within the Computer Science Department, aiming <br/>
                  to expand access to high-quality, human-centric computer science education beyond the campus. <br/>
                  Through inclusive projects and initiatives, we aim to extend computer science education to diverse <br/>
                  learners across different regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro