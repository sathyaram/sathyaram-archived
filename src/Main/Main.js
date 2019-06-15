import React, { Component } from 'react';
import Project from '../Project/Project'
import Header from '../Header/Header';

import Framicons from '../Framicons/Framicons'
import projects from './../projects.json'

class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Framicons />
        <section>
          {projects.map(function (project, i) {
            return (
              <Project key={i} project={project} />
            )
          }
          )}
        </section>
      </main>
    );
  }
}

export default Main;