import React, { Component } from "react";
import './App.scss';
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends Component {
  state = {
    selectedCategories: []
  }

  categoryChanged = (selections) => {
    this.setState({
      selectedCategories: selections
    })
  }

  render() {
    return (
    <>
      <Loader />
      <Menu />
      <Header />
      <Main selectedCategories={this.state.selectedCategories}/>
      <Footer categoryChanged={this.categoryChanged}/>
    </>
    );
  }
}

export default App;
