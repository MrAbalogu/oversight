import React from 'react';
import SideBar from './admin/sidebar';
import PoliticiansTable from './admin/politicians-table';

const REQUEST_URL = 'https://6282da3b.ngrok.io/politicians';

class Admin extends React.Component {
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

  handleUserInput(s) {
    this.setState({
      input: s,
    });
  }

  render() {
    const filtered = this.state.data.filter((p) => {
      return (p.name.toLowerCase().indexOf(this.state.input) > -1);
    });

    return (
      <div className="admin-cont col-md-12">
        <SideBar />
        <PoliticiansTable politicians={filtered} />
      </div>
    );
  }
}
export default Admin;
