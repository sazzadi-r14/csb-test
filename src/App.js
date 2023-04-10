import React from 'react';

import {Header, Intro, Mission, Projects, Courses, Impact, News, Contact, Footer} from './components';
import './App.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Mission />
      <Projects />
      <Courses />
      <Impact />
      <News />
      <Contact />
      <Footer />
    </div>
  )
}

/*

Header ++
Intro  ++
Mission ++
Projects ++
Courses ++
Impact ++
News ++
Maps ++
Contact ++
Footer ++

*/

export default App;