import React from 'react';
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Loader />
      <Menu />
      <Header />
      <Switch>
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/" render={() => <Main />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
