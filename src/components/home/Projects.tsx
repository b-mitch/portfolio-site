import React from 'react';

interface ProjectsProps { projectsStyles: boolean }

export default function Projects({ projectsStyles }: ProjectsProps): JSX.Element {

    let altStyle: React.CSSProperties | undefined;
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
            <li><a href="https://github.com/b-mitch/buymystuff" target="_blank" rel="noreferrer">Buy My Stuff - e-commerce app</a></li>
            <li><a href="http://www.woutfh.com/" target="_blank" rel="noreferrer">Workout From Home - home workouts & scheduling app</a></li>
            <li><a href="https://github.com/b-mitch/minesweeper" target="_blank" rel="noreferrer">Minesweeper - console game</a></li>
          </ul><br/><br/>
        </div>
    )
}
