import React from 'react';
import sql from './sql.png';

export default function Skills({ skillsStyles }) {

    let altStyle;
    if (skillsStyles) {
        altStyle = {
            color:'darkorange',
            fontSize:'200%', 
            marginLeft:'.5em'
        }
    }

    return (
        <div id="skills" className="skills">
          <h2 style={altStyle} className="grow3">Skills</h2><br/>
          <div className="logo-container">
            <i className="fa-brands fa-html5 fa-5x"></i>
            <i className="fa-brands fa-css3-alt fa-5x"></i>
            <i className="fa-brands fa-square-js fa-5x"></i>
            <i className="fa-brands fa-react fa-5x"></i>
            <i className="fa-brands fa-node-js fa-5x"></i>
            <i class="fa-brands fa-python fa-5x"></i>
            <i class="fa-brands fa-aws fa-5x"></i>
            <i class="fa-brands fa-docker fa-5x"></i>
          </div>
        </div>
    )
}