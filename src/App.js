import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputCep: '',
        enderecos: [],
        cep:'',
        rua: '',
        bairro: '',
        cidade: '',
        uf: '',
    };
}
  render() {
    const { enderecos, inputCep } = this.state;
    return (
      <div className="App">
       <Header/>
       <Buttons
          enderecos={enderecos}
          inputCep={inputCep}
          onChange={this.onChange}
          addEnd={this.addEnd}
          delEnd={this.delEnd}
      />
      </div>
    );
  }
}

export default App;
