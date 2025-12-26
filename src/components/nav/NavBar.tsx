import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

interface NavBarProps { handleClick: (e: React.MouseEvent) => void }

export default function NavBar({ handleClick }: NavBarProps): JSX.Element {
    return (
        <div className='header'>
            <nav>
            <div className="heading">
                <h2>Brenden Mitchum</h2>
            </div>
            <ul>
                <li>
                <NavHashLink smooth to="/#about" className="click1" onClick={handleClick}>About Me</NavHashLink>
                </li>
                <li>
                <NavHashLink smooth to="/#projects" className="click2" onClick={handleClick}>Projects</NavHashLink>
                </li>
                <li>
                <NavHashLink smooth to="/#skills" className="click3" onClick={handleClick}>Skills</NavHashLink>
                </li>
                <li>
                <NavHashLink smooth to="/#certificates" className="click4" onClick={handleClick}>Certificates</NavHashLink>
                </li>
                <li>
                <NavLink to="/contact">Contact Me</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    );
}
