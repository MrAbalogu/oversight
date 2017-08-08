import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Register extends React.Component{
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
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div className='float-left'>
        <FontIcon className="material-icons nav-icon" onClick={this.handleOpen.bind(this)}>face</FontIcon>
        <Dialog
          title='Register'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <div className='col-md-6 col-md-offset-3'>
            <br />
            <TextField
              hintText="Full Name"
            /><br />
            <TextField
              hintText="Email Address"
            /><br />
            <TextField
              hintText="Password"
            /><br />
            <TextField
              hintText="Phone Number"
            /><br />
            <TextField
              hintText="Date of Birth"
            /><br />
            <TextField
              hintText="State"
            /><br />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default Register;
