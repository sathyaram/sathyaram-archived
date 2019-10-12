import React, { Component, lazy, Suspense } from 'react';
import projects from './../projects.json';
const Project = lazy(() => import('../Project/Project'));

class Main extends Component {
  render() {
    return (
      <main id="maincontent" role="main">
        {projects.map(function (project, i) {
          return (
            <Suspense key={i} fallback={<div className="lazyLoading">Loading...</div>}>
              <Project key={i} project={project} />
            </Suspense>
          )
        })}
      </main>
    );
  }
}

export default Main;