import React from 'react';
import './Project.scss'

const Project = props => {
  

    return (
      <article>
        <h3>{props.project.title}</h3>
        <h4>{props.project.subtitle}</h4>
      </article>
    );
  
}

export default Project;