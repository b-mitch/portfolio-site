import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import NavBar from './components/nav/NavBar';

function App() {
  const [aboutStyles, setAboutStyles] = useState(false);
  const [projectsStyles, setProjectsStyles] = useState(false);
  const [skillsStyles, setSkillsStyles] = useState(false);

  const handleClick = (e) => {

    const clicked = e.target.className;

    if (clicked === 'click1') {
      setAboutStyles(true);
      setProjectsStyles(false);
      setSkillsStyles(false);
    }
    if (clicked === 'click2') {
      setAboutStyles(false);
      setProjectsStyles(true);
      setSkillsStyles(false);
    }
    if (clicked === 'click3') {
      setAboutStyles(false);
      setProjectsStyles(false);
      setSkillsStyles(true);
    }
  }

  return (
    <div className="App">
        <NavBar handleClick={handleClick}/>

        <Routes>
          <Route path="/" element={
            <Home 
              aboutStyles={aboutStyles}
              projectsStyles={projectsStyles}
              skillsStyles={skillsStyles} 
            />
          }/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
