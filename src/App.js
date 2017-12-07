import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Buttons/>
      </div>
    );
  }
}

export default App;
