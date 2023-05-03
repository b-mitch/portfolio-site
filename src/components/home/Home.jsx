import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
    return (
        <div className='home'>
            <About />
            <Projects />
            <Skills />
        </div>
    )
}