import React from 'react';
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
      

function App() {
  return (
    <>
      <Loader />
      <Menu />
      <Header />
      <Switch>
        <Route path="/graphic" render={() => <></>} />
        <Route path="/" render={() => <Main />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
