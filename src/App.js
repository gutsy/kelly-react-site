import React, { Component } from 'react';
import logo from './imgs/logo.jpg';
import SwiperComponent from './SwiperComponent'
import './App.css';
import './styles/swiper.css';
import AppFooter from "./AppFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">An artist you can trust.</h1>
        </header>
        <p className="App-intro">
            <SwiperComponent/>
        </p>
          <AppFooter/>
      </div>
    );
  }
}

export default App;
