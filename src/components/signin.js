import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onUserSubmit.bind(this)}
      />,
    ];

    return (
      <div className='float-left'>
        <FontIcon className="material-icons nav-icon" onClick={this.handleOpen.bind(this)}>input</FontIcon>
        <Dialog
          title='Sign In'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <div className='col-md-6 col-md-offset-3'>
            <br />
            <TextField
              hintText="Email Address"
            /><br />
            <TextField
              hintText="Password"
            /><br />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default SignIn;
