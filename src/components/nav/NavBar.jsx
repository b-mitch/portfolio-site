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
            <a className="click1" onClick={handleClick}><NavHashLink smooth to="/#about">About Me</NavHashLink></a>
            </li>
            <li>
            <a className="click2" onClick={handleClick}><NavHashLink smooth to="/#projects">Projects</NavHashLink></a>
            </li>
            <li>
            <a className="click3" onClick={handleClick}><NavHashLink smooth to="/#skills">Skills</NavHashLink></a>
            </li>
            <li>
            <NavLink to="/contact">Contact Me</NavLink>
            </li>
        </ul>
        </nav>
    </div>
    )
  }