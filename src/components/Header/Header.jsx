import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const style = {
    margin: 12,
  };

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
       render() {
        return (
          <div className="App">
            <AppBar
                title="Busca CEP!"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={() => this.setState({open: !this.state.open})}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
            </Drawer>

          </div>
        );
      }
}

export default Header