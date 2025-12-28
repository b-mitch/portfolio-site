import React from 'react';
import GhostScroller from './GhostScroller';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import Contact from './Contact';

interface HomeProps {
}

export default function Home({ 
}: HomeProps): JSX.Element {
    return (
        <div className='home'>
            <div className='body'>
                <GhostScroller >
                    <About />
                    <Skills />
                    <Certificates />
                    <Projects />
                    <Contact />
                </GhostScroller>
            </div>
            <div className="footer">
                <h6>&copy; Copyright. All Rights Reserved.</h6>
            </div>
        </div>
    )
}
