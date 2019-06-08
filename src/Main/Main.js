import React, { Component } from 'react';
import './Main.scss'
import Project from '../Project/Project'
import Framicons from '../Framicons/Framicons'
import projects from './projects.json'


class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <Framicons />
        </section>
        <section>
          {projects.map((project, i) => (
            <Project key={i} project={project}/>
          ))}
        </section>
      </main>
    );
  }
}

export default Main;