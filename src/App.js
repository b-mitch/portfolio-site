import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {

  const NavBar = () => {
      return (
        <div className='header'>
          <nav>
            <div class="heading">
              <h2>Brenden Mitchum</h2>
            </div>
            <ul>
              <li>
                <a className="click1"><NavLink to="/#about" className="click1">About Me</NavLink></a>
              </li>
              <li>
                <a className="click2"><NavLink to="/#projects" className="click2">Projects</NavLink></a>
              </li>
              <li>
                <a className="click3"><NavLink to="/#skills" className="click3">Skills</NavLink></a>
              </li>
              <li>
                <NavLink to="/contact">Contact Me</NavLink>
              </li>
            </ul>
          </nav>
        </div>
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
