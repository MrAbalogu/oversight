import React from 'react';

const REQUEST_URL = 'https://6bf8cb94.ngrok.io/users';

class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: '',
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

  render() {
    const tablerow = this.state.data.map(p => {
      return (
        <tr key={p.id}>
          <td>{p.username}</td>
          <td>{p.email}</td>
          <td>{p.phone_number}</td>
          <td>{p.state}</td>
        </tr>
      );
    });
    return (
      <div className="col-md-9 admin-table">
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
export default UsersTable;
