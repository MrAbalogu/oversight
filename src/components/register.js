import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const url = 'https://6bf8cb94.ngrok.io/users';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      fullname: '',
      email: '',
      password: '',
      number: '',
      dob: '',
      state: '',
    }
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleFullname(e) {
    this.setState({ fullname: e.target.value });
  }
  handleEmail(e) {
    this.setState({ email: e.target.value });
  }
  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleNumber(e) {
    this.setState({ number: e.target.value });
  }
  handleDob(e) {
    this.setState({ dob: e.target.value });
  }
  handleState(e) {
    this.setState({ state: e.target.value });
  }

  handleSubmit() {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.fullname,
        password: this.state.password,
        phone_number: this.state.number,
        email: this.state.email,
        dob: this.state.dob,
        state: this.state.state,
      }),
    })
    .then(response => response.json())
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      console.log(url);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

    console.log(this.state.fullname);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.number);
    console.log(this.state.dob);
    console.log(this.state.state);

    this.setState({
      fullname: '',
      email: '',
      password: '',
      number: '',
      dob: '',
      state: '',
    });
  }

  render() {
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
        onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];

    return (
      <div className="float-left">
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
              value={this.state.fullname}
              onChange={this.handleFullname.bind(this)}
            /><br />
            <TextField
              hintText="Email Address"
              value={this.state.email}
              onChange={this.handleEmail.bind(this)}
            /><br />
            <TextField
              hintText="Password"
              value={this.state.password}
              onChange={this.handlePassword.bind(this)}
            /><br />
            <TextField
              hintText="Phone Number"
              value={this.state.number}
              onChange={this.handleNumber.bind(this)}
            /><br />
            <TextField
              hintText="Date of Birth"
              value={this.state.dob}
              onChange={this.handleDob.bind(this)}
            /><br />
            <TextField
              hintText="State"
              value={this.state.state}
              onChange={this.handleState.bind(this)}
            /><br />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default Register;
