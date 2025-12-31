import React from 'react';

export default function Skills(): JSX.Element {

    return (
        <div id="skills" className="section">
          <h1>Skills</h1><br/>
          <div className="badge-container">
            <i className="fa-brands fa-github fa-5x" title="GitHub"></i>
            <i className="fa-brands fa-linux fa-5x" title="Linux"></i>
            <i className="fa-brands fa-react fa-5x" title="React"></i>
            <i className="fa-brands fa-node-js fa-5x" title="Node.js"></i>
            <i className="fa-brands fa-python fa-5x" title="Python"></i>
            <i className="fa-brands fa-aws fa-5x" title="AWS"></i>
            <i className="fa-brands fa-docker fa-5x" title="Docker"></i>
            <i className="fa-brands fa-jenkins fa-5x" title="Jenkins"></i>
            <svg className="svg-icons" aria-labelledby="pulumi-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title id="pulumi-title">Pulumi</title>
              <path id="pulumi"/>
            </svg>
            <svg className="svg-icons" aria-labelledby='ts-title' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <title id="ts-title">TypeScript</title>
              <path id="ts"/>
            </svg>
            <svg className="svg-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <title id="terraform-title">Terraform</title>
              <path id="terraform"/>
            </svg>
          </div>
        </div>
    )
}
