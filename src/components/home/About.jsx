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
            <div className="p1"><p>Hey there! I'm Brenden, Marine Scientist turned Realtor turned Developer! My four-year undergraduate schooling in a STEM field prepared me for a life of questions. Questions about myself. What do I want to do? Who do I want to be? What kind of impact do I want to make during my time in this universe? Also, questions about the world and its inhabitants. How should we interact with our non-human world? Why do we do what we do? How can we do better?</p><br/></div>
            <div className="p2"><p>Becoming a Developer is just another way for me to navigate this wild world and answer those questions. While many of our questions can now be answered with a few keystrokes, many more still reamin unanswered. Plus, the accuracy of these <q>answers</q> is often questionable, at best. However, who's to blame? The questions or the answers? I've learned that better questions allow for to better answers. As a Developer, I plan to hone my ability to ask these questions. However, it's the answering of the questions that really fires me up. Exercising my creativity and critical thinking in tandem is what I enjoy most about programming.</p></div> 
          </div>
        </div>
    )
}