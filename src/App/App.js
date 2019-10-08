import React from 'react';
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import About from '../About/About';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Loader />
      <Menu />
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/" render={() => <Main />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
