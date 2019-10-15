import React, { Component, Suspense } from 'react';
import projects from './../projects.json';
import Project from '../Project/Project';


class Main extends Component {
  render() {
    let filterData = projects;
    if (this.props.selectedCategories.length > 0) {
      filterData = projects.filter((w) => this.props.selectedCategories.includes(w.type));
    }

    return (
      <main id="maincontent" role="main">
        {filterData.map(function (project, i) {
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