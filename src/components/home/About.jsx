import React from 'react';

export default function About({ aboutStyles }) {

    let altStyle;
    if (aboutStyles) {
        altStyle = {
            color:'darkorange',
            fontSize:'200%', 
            marginLeft:'.5em'
        }
    }

    return (
        <div id="about" className="about-me">
          <h2 style={altStyle} className="grow1">About Me</h2>
          <div className="grid-container">
            <div className="image-container">
                <img src="./images/me.jpg" alt="photo of Brenden"/>
            </div>
            <div className="p1"><p>I'm Brenden; a Marine Scientist… turned Realtor… turned Programmer. My education in a STEM field helped feed my inherently inquisitive nature. What do I want to do? Who do I want to be? What kind of impact do I want to make during my time in this universe? Also, questions about the world and its inhabitants. How should we interact with our non-human world? Why do we do what we do? How can we do better?</p><br/></div>
            <div className="p2"><p>While ample questions remain, learning how to program has helped me better navigate this wild world. Some of our questions can be resolved (often erroneously) with a few simple keystrokes. For others, answers remain elusive. Nevertheless, I have learned that better questions lead to better answers. Finding solutions to these questions through creativity & critical thinking is my passion. And as a Developer, I get to live my passion every day.</p></div> 
          </div>
        </div>
    )
}