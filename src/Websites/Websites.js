import React, { Component, lazy, Suspense } from 'react';
import projects from './../projects.json';
const Project = lazy(() => import('../Project/Project'));

class Websites extends Component {
  render() {
    return (
      <section id="maincontent">
      {projects.map(function (project, i) {
        return (
          <Suspense key={i} fallback={<div className="lazyLoading">Loading...</div>}>
            <Project key={i} project={project} />
          </Suspense>
        )
      }
      )}
    </section>
    );
  }
}

export default Websites;