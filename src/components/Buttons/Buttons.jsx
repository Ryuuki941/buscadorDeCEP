import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/clear';
import { green300, red300 } from 'material-ui/styles/colors';
import Content from '../Content/Content'
import superagent from 'superagent';
// import Feedback from '../Feedback/Feedback'




const style1 = {
  margin: 0,
  top: 'auto',
  right: 120,
  bottom: 20,
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
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      CEP: '',
      enderecos:[],
      selectedIndex: 0,
      isDisable: false,
      realTime: true,

    };
  }

  conectar = () => {
    var CEP = this.state.CEP;
    var url = 'https://viacep.com.br/ws/' + CEP + '/json/'
    superagent.get(url).then(
        
          response => {
           const enderecos = this.state.enderecos.slice();
            if (response.status !== 200) {
                window.alert('Looks like there was a problem. Status Code: ' +
                response.status);
                // console.log(url,response,CEP) ;
            }
            // console.log(response)
            // console.log(typeof(response))
            
              const { logradouro: rua, localidade: cidade, bairro, erro} = response.body;
              if(erro == true){
                  alert("CEP inválido");
              }else{
                var endereco = '';
                if(rua.length == 0 && bairro.length == 0) endereco = cidade;
                else if(bairro.length == 0) endereco = rua + ', ' + cidade;
                else if(rua.length == 0 ) endereco = bairro + ', ' + cidade;
                else endereco = rua + ', ' + bairro + ', ' + cidade;
                
                const enderecoCompleto = 'Endereco: ' + endereco + '. CEP: ' + CEP;
                enderecos.push(enderecoCompleto)
                this.state.enderecos = enderecos
            //   console.log('okay');

               for(var i = 0; i < enderecos.length; i++){
                 console.log(i + " = " + enderecos[i]);
             }
             this.setState({open: false});
           
          }
          }
        )
        .catch(err => {
            window.alert('Fetch Error :-S', err);
        });
  
};
  
select = (index) => this.setState({selectedIndex: index});
 
  handleOpen = () => {
    this.setState({open: true});
  };

  handleCloseSearch = () => {


    this.setState({open: false});
    console.log(this.state.CEP)
    this.conectar();
    this.setState({CEP: ''})
    this.setState({realTime: true})

  };
  handleCloseNormal = () => {
    this.setState({open: false});
  };

  handleDelete = () => {
    const enderecos = this.state.enderecos.slice();
    this.setState({ enderecos: [] });
    // this.setState({openFeedback: true});
    // console.log('deleted')
  };

  handleNothing = () =>{
    this.setState({open: false});
    console.log('clicou')
  }
  
  onChange = event => {
    if (event.target.value.length !== 8) {
      this.setState({ errorText: 'Digite apenas 8 Digitos ' })
      this.state.isDisable = true
    } 
    else if (isNaN(event.target.value) === true) {
        this.setState({ errorText: 'Por favor coloque apenas numeros' })
        this.state.isDisable = true    
      }else if (event.target.value.replace(/\s/g,"") === '') {
        this.setState({ errorText: 'Por favor coloque apenas numeros' })
        this.state.isDisable = true
      }else {
      this.setState({ errorText: '' })
      this.setState({CEP: event.target.value})
      this.state.isDisable = false
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
        disabled={this.state.isDisable}
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
            onClick={this.handleDelete}
            backgroundColor= {red300}
            iconStyle={ myStyle2 }
        >
        <ContentRemove />
        </FloatingActionButton>
        {/* <FloatingActionButton 
            id="refresh"
            style={style3} 
            onClick={this.handleNothing}
            backgroundColor= {blue100}
            iconStyle={ myStyle3 }
        >
            <ContentCreate />
            {/* <Feedback openFeedback={this.state.openFeedback}/> */}
        {/* </FloatingActionButton> */} 
        
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
        <Content enderecos={this.state.enderecos}/>
      </div>
    );
  }
 }
 

export default createButtons;