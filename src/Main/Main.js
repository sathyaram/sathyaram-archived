import React, { Component } from 'react';
import './Main.scss'
import Project from '../Project/Project'
import Framicons from '../Framicons/Framicons'
import Photography from '../Photography/Photography'
import Graphic from '../Graphic/Graphic'
import projects from './projects.json'
import { Route, Switch } from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <Framicons />
        </section>
        <section>
        <Switch>
          <Route path="/web" render={() => projects.map((project, i) => (
            <Project key={i} project={project} />
          ))} />
          <Route path="/graphic" render={() => <Graphic />} />
          <Route path="/photography" render={() => <Photography />} />
          <Route path="/" render={() => projects.map((project, i) => (
            <Project key={i} project={project} />
          ))} />
        </Switch>
          
        </section>
      </main>
    );
  }
}

export default Main;