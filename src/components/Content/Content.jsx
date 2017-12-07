import React from 'react';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';

const style = {
    width: '90%',
    height:"10%",
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
  };


    const Content = props => {
      const {enderecos} = props;
        return(
            <div>
                <List>
                {/* {console.log(enderecos)}
                {console.log(typeof(enderecos))} */}
                {enderecos.map((endereco, index) => (
               <Paper style={style} zDepth={3} className="item" key={index}>{endereco.toString()}</Paper>))}
                </List>
            </div>
        );
    }

export default Content;