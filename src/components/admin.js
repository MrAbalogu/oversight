import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PoliticiansTable from './admin/politicians-table';
import UsersTable from './admin/users-table';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  showPoliticians() {
    this.setState({
      show: true,
    })
  }

  showUsers() {
    this.setState({
      show: false,
    })
  }

  render() {
    let tableDisplay = null;
    if (this.state.show === true) {
      tableDisplay = <PoliticiansTable />;
    } else {
      tableDisplay = <UsersTable />;
    }

    return (
      <MuiThemeProvider>
        <div className="admin-cont col-md-12">
          <div className="sidebar row col-md-3">
            <ul className="sidebar-cont">
              <li onClick={this.showPoliticians.bind(this)} >Politicians</li>
              <li onClick={this.showUsers.bind(this)} >Users</li>
            </ul>
          </div>

          {tableDisplay}

        </div>
      </MuiThemeProvider>
    );
  }
}
export default Admin;
