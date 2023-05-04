import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

export default function Home({ 
    aboutStyles,
    projectsStyles,
    skillsStyles
 }) {

    return (
        <div className='home'>
            <div className='body'>
                <About aboutStyles={aboutStyles}/>
                <Projects projectsStyles={projectsStyles}/>
                <Skills skillsStyles={skillsStyles}/>
            </div>
            <div className="footer">
                <h6>&copy; Copyright. All Rights Reserved.</h6>
            </div>
        </div>
    )
}