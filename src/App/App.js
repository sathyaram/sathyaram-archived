import React from 'react';
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Loader />
      <Menu />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
