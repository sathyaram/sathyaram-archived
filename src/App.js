import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import projects from "./projects.json";

import Photography from './Photography'
import Playground from './Playground'
import Websites from './Websites'
import Designs from './Designs'
import About from './About'
import Menu from './Menu'
import Footer from './Footer'
import './Reset.scss';
import './App.scss';

function App() {
  const mappedPhotos = [];
  const mappedWebsites = [];
  const mappedDesigns = [];

  projects.forEach((project, i) => {
    if (project.type === "Web") {
      mappedWebsites.push(<Websites key={i} project={project} />);
    } else if (project.type === "Photography") {
      mappedPhotos.push(<Photography key={i} photo={project} />);
    } else if (project.type === "Graphic") {
      mappedDesigns.push(<Designs key={i} graphic={project} />);
    }
  });
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/websites" render={() => {mappedWebsites}} />
        <Route path="/designs" render={() => {mappedDesigns}} />
        <Route path="/photography" render={() => {mappedPhotos}} />
        <Route path="/playground" render={() => <Playground />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
