import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './components/contact/Contact';

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
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      )
  }

  return (
    <div className="App">
      <div className="nav">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
