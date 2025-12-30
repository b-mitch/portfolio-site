import React from 'react';

// TODO: replace with your actual LinkedIn URL
const LINKEDIN_URL = 'https://www.linkedin.com/in/brenden-mitchum/';

export default function Contact(): JSX.Element {
    return (
        <div id="contact" className='section'>
            <h1>Let's Chat!</h1>
            <div id="contact-logos">
                <a href="mailto:bmitchum.dev@gmail.com" aria-label="Send email" title="Email">
                    <i className="fa-solid fa-envelope fa-2x" aria-hidden="true"></i>
                    <span className="sr-only">Email</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="View LinkedIn profile" title="LinkedIn">
                    <i className="fa-brands fa-linkedin fa-2x" aria-hidden="true"></i>
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        </div>
    );
}
