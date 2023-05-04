import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

export default function NavBar({ handleClick }) {
    return (
    <div className='header'>
        <nav>
        <div class="heading">
            <h2>Brenden Mitchum</h2>
        </div>
        <ul>
            <li>
            <NavHashLink smooth to="/#about"><a className="click1" onClick={handleClick}>About Me</a></NavHashLink>
            </li>
            <li>
            <NavHashLink smooth to="/#projects"><a className="click2" onClick={handleClick}>Projects</a></NavHashLink>
            </li>
            <li>
            <NavHashLink smooth to="/#skills"><a className="click3" onClick={handleClick}>Skills</a></NavHashLink>
            </li>
            <li>
            <NavLink to="/contact">Contact Me</NavLink>
            </li>
        </ul>
        </nav>
    </div>
    )
  }