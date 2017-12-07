import React, { Component } from 'react';
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

    const Content = props => {
      const {enderecos, realTime} = props;
        return(
            <Paper style={style} zDepth={4}>
                <List>
                {console.log(enderecos)}
                {console.log(typeof(enderecos))}
                </List>
                <Divider />
            </Paper>
        );
    }

//   class Content extends Component {
//     constructor(props) {
//         super(props);
//         this.enderecos = {open: false};
//       }
    
//     render(){
//         return(
//             <Paper style={style} zDepth={4}>
//                 <List>
//                 {enderecos.map((endereco, index) => (
//                 <p  className="item" key={index}>{endereco.toString()}</p>))}
//                 {/* <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} /> */}
//                 </List>
//                 <Divider />
//             </Paper>
//         );
//     }
// }
export default Content;




{/* <div className="table-striped lista">
                    {enderecos.map((endereco, index) => (<p className="item" key={index}>{endereco.toString()}</p>))}
                </div> */}