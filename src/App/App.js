import React from 'react';
import './App.scss';
import Loader from '../Loader/Loader'
import Header from '../Header/Header';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Loader />
      <Header />
      <Switch>
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/" render={() => <Main />} />
      </Switch>
    </div>
  );
}

export default App;
