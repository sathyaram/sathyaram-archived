import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Photography from './Photography';
import Playground from './Playground';
import Websites from './Websites';
import Designs from './Designs';
import About from './About';
import Menu from './Menu';
import Footer from './Footer';
import './Reset.scss';
import './App.scss';

function App() {

  return (
    <>
      <a className="skip-main" href="#maincontent">Skip to Main Content</a>
      <Menu />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/websites" render={() => <Websites />} />
        <Route path="/designs" render={() => <Designs />} />
        <Route path="/playground" render={() => <Playground />} />
        <Route path="/photography" render={() => <Photography />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
