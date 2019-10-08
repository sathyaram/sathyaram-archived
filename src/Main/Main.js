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
        <Websites />
        {/* <Switch>
          <Route path="/" render={() => <Photography />} />
          <Route path="/" render={() => <Designs />} />
          <Route path="/" render={() => <Websites />} />
        </Switch> */}
        
      </main>
    );
  }
}

export default Main;