import React, { Component } from 'react';
import Header from '../Header/Header';
import Websites from '../Websites/Websites';
import Designs from '../Designs/Designs';
import Photography from '../Photography/Photography';
import { Route, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <main role="main" className="home">
        <Header />
        <Switch>
          <Route path="/photography" render={() => <Photography />} />
          <Route path="/designs" render={() => <Designs />} />
          <Route path="/websites" render={() => <Websites />} />
        </Switch>
        
      </main>
    );
  }
}

export default Main;