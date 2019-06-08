import React, { Component } from 'react';
import './Main.scss'
import Project from '../Project/Project'
import projects from './projects.json'


class Main extends Component {
  render() {
    return (
      <main>
          {projects.map((project, i) => (
            <Project key={i} project={project}/>
          ))}
      </main>
    );
  }
}

export default Main;