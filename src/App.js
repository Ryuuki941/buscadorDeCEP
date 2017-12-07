import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'
import Content from './components/Content/Content'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        inputCep: '',
        enderecos: [],
        cep:'',
       // realTime
    };
}

onChange = ev => {
  ev.preventDefault();
 
  const state = Object.assign({}, this.state);
  state[ev.target.name] = ev.target.value;
  this.setState(state);

};

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
          // realTime={this.realTime}
      />{console.log("estou no app1")}
      <Content
         enderecos={['enderecos', 'oi', 'cale']}
         onChange={this.onChange}
        //  realTime={this.realTime}
         /> {console.log("estou no app")}
      </div>
    );
  }
}

export default App;
