import React from 'react';

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
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="f7dd5387-7045-4b53-9e6f-b1260bde9380" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="08d815ee-d932-4e46-ac18-65f7a5a816a6" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            <i class="fa-brands fa-docker fa-5x"></i>
          </div>
        </div>
    )
}