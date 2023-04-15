import React from 'react';

import {Header, Intro, Mission, Projects, Courses, Impact, News, Contact, Footer} from './components';
import './App.css';




const App = () => {
  return (
    <div className='App'>
      <Header />
      <Intro />
      {/*<Mission />*/}
      <Courses />
      <Projects />
      {/*<Impact />*/}
      <News />
      <Contact />
      <Footer />
    </div>
  )
}



export default App;