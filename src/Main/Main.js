import React, { Component } from 'react';
import Header from '../Header/Header';
import Websites from '../Websites/Websites';

class Main extends Component {
  render() {
    return (
      <main role="main" className="home">
        <Header />
        <Websites />
      </main>
    );
  }
}

export default Main;