import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/clear';
import { green300, red300 } from 'material-ui/styles/colors';
import connect from '../Action/Connection'


const style1 = {
  margin: 0,
  top: 70,
  right: 20,
  bottom: 'auto',
  left: 'auto',
  position: 'fixed',
};

const style2 = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  };

const myStyle1 = {
    height: 80,
    width: 80,
};
const myStyle2 = {
    height: 80,
    width: 80,
};


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};
 class createButtons extends React.Component {
  state = {
    open: false,
    CEP: '',
  };
 
  handleOpen = () => {
    this.setState({open: true});
  };

  handleCloseSearch = () => {
    this.setState({open: false});
    connect(this.state.CEP);
    console.log(this.state.CEP)
    // doAPI().then(cep => {
    //   console.log(cep);
     // this.setState({ceps: [cep]})
     // this.array.ceps.push(cep)
    //})

  };
  handleCloseNormal = () => {
    this.setState({open: false});
  };

  getCEP = CEP =>{
      this.setState({CEP: CEP});
      connect(CEP);
  }

  onChange = event => {
    // event.preventDefault();
    // const cep = Object.assign({}, this.state);

    // cep[event.target.name] = event.target.value;

    if (event.target.value.length !== 8) {
      this.setState({ errorText: 'Digite apenas 8 Digitos ' })
    } 
    else if (isNaN(event.target.value) === true) {
        this.setState({ errorText: 'Por favor coloque apenas numeros' })
      //desabilitar o 'procure'
    }else if (event.target.value.replace(/\s/g,"") === '') {
        this.setState({ errorText: 'Por favor coloque apenas numeros' })
      //desabilitar o 'procure'
    }else {
      this.setState({ errorText: '' })
      this.setState({CEP: event.target.value})
      //abilitar o 'procure'
    }
  }
 


  render = () => {
    const actions = [
      <FlatButton
        className="Cancelar"
        label="Cancelar"
        primary={true}
        onClick={this.handleCloseNormal}
      />,
      <FlatButton
        className="Procure"      
        label="Procure"
        primary={true}
        onClick={this.handleCloseSearch}
      />, 
    ];

    return (
      <div>
        <FloatingActionButton 
            id="add"
            style={style1} 
            onClick={this.handleOpen}
            backgroundColor= {green300}
            iconStyle={ myStyle1 }
        >
            <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton 
            id="delete"
            style={style2} 
            backgroundColor= {red300}
            iconStyle={ myStyle2 }
        >
            <ContentRemove />
        </FloatingActionButton>
        <Dialog
          title="Procure por um CEP"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        > 
          <TextField
           id="CEP-value" 
           label="CEP" 
           floatingLabelText="Digite um CEP"
        //    CEP = {this.textFieldValue}
           value  = {this.textFieldValue} 
           errorText= {this.state.errorText}
           onChange={this.onChange.bind(this)
        }          
           />           
        </Dialog>
      </div>
    );
  }

 }

export default createButtons;