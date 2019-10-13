import React, { useState } from "react";
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = (props) => {
  const [selectedCategory, setSelectedCategory] = useState()

  return (
    <>
      <Loader />
      <Menu />
      <Header />
      <Main selectedCategory={selectedCategory}/>
      <Footer onCategoryPress={setSelectedCategory}/>
    </>
  );
}

export default App;
