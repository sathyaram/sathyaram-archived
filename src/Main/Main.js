import React, { Component } from 'react';
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
          {projects.map(function (project, i) {
            return (
              <Project key={i} project={project} />
            )
          }
          )}
        </section>
      </main>
      /* <Switch>
      import Photography from '../Photography/Photography'
      import Graphic from '../Graphic/Graphic'
      import { Route, Switch } from 'react-router-dom';

          <Route path="/web" render={() => projects.map((project, i) => (
            <Project key={i} project={project} />
          ))} />
          <Route path="/graphic" render={() => <Graphic />} />
          <Route path="/photography" render={() => <Photography />} />   />*/
      // </Switch>}
    );
  }
}

export default Main;