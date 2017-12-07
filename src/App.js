import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Buttons from './components/Buttons/Buttons'
import Content from './components/Content/Content'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Paper from 'material-ui/Paper';


const style = {
  width: '60%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

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
       <Buttons/>


      </div>
    );
  }
}

export default App;
