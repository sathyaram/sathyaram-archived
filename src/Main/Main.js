import React, { Component, lazy, Suspense } from 'react';
import Header from '../Header/Header';
import projects from './../projects.json';
const Project = lazy(() => import('../Project/Project'));

class Main extends Component {
  render() {
    return (
      <main id="home" role="main" className="home">
        <Header />
        <section>
          {projects.map(function (project, i) {
            return (
              <Suspense key={i} fallback={<div className="lazyLoading">Loading...</div>}>
                <Project key={i} project={project} />
              </Suspense>
            )
          }
          )}
        </section>
      </main>
    );
  }
}

export default Main;