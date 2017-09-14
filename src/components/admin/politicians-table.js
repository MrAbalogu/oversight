import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const REQUEST_URL = 'https://6bf8cb94.ngrok.io/politicians';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

class PoliticiansTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: '',
      open: false,
    };
  }

  componentDidMount() {
    return fetch(REQUEST_URL)
      .then(response => response.json())
        .then((json) => {
          this.setState({
            data: json,
            showDialog: false,
          });
        });
  }

  handleOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose.bind(this)}
      />,
    ];

    const tablerow = this.state.data.map(p => {
      return (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>{p.state}</td>
          <td>{p.current_post}</td>
          <td>{p.rating}</td>
        </tr>
      );
    });

    return (
      <div className="col-md-9 admin-table">
        <Dialog
          title="Add Politician"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <div className="col-md-12">
            <div className="col-md-6">
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
            <div className="col-md-6">
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
          </div>
        </Dialog>
        <button className="btn btn-success" onClick={this.handleOpen.bind(this)} > Add Politician + </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>State</th>
              <th>Position</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {tablerow}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PoliticiansTable;
