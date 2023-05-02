import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const NavBar = () => {
      return (
        <nav>
          <ul>
            <li>
              <NavLink to="/#about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/#projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/#skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact-me">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      )
  }

  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
