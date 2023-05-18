import React from 'react';

export default function Projects({ projectsStyles }) {

    let altStyle;
    if (projectsStyles) {
        altStyle = {
            color:'darkorange',
            fontSize:'200%', 
            marginLeft:'.5em'
        }
    }

    return (
        <div id="projects" className="projects">
        <h2 style={altStyle} className="grow2">Projects</h2><br/>
          <ul>
            <li><a href="https://github.com/b-mitch/buymystuff">Buy My Stuff - e-commerce PERN app</a></li>
            <li><a href="https://woutfh.herokuapp.com/">WoutFH - home workouts & scheduling app<em>&#40;in development&#41;</em></a></li>
            <li className="in-dev"><a>Flashey - flashcard app<em>&#40;in development&#41;</em></a></li>
          </ul><br/><br/>
        </div>
    )
}