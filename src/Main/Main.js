import React, { Component } from 'react';
import Project from '../Project/Project'
import Header from '../Header/Header';
import projects from './../projects.json'

class Main extends Component {
  render() {
    return (
      <main id="home" role="main" className="home">
        <Header />
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