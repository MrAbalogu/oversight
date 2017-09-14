import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import TopNav from './topnav';
import Profile from './profile';
import SearchBar from './searchbar';
import Politicians from './politicians';

const REQUEST_URL = 'https://6bf8cb94.ngrok.io/politicians';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      input: '',
      loggedin: false,
    }
  };

  componentDidMount(){
    return fetch(REQUEST_URL)
      .then((response) => response.json() )
        .then((json) => {
            this.setState({
              data: json,
              showDialog: false,
            });
          })
          .catch((error) => {
            console.error(error);
          });
  }

  handleUserInput(s) {
    this.setState({
      input: s,
    })
  }

  login() {
    console.log('just changed loggedin state');
    this.setState({
      loggedin: true,
    });
  }

  render() {
    const filtered = this.state.data.filter((p) => {
      return (p.name.toLowerCase().indexOf(this.state.input) > -1);
    });

// login front end rendering of TopNav
    let topnav = null;
    if (this.state.loggedin === false) {
      topnav = <TopNav onUserSubmit={this.login.bind(this)} />;
    } else {
      topnav = <Profile />;
    }
// ...........

    return (
      <div className='col-md-12 page-container'>
        {topnav}
        <SearchBar
          data={filtered}
          value={this.state.searchText}
          onUserInput={this.handleUserInput.bind(this)}
          onClick={this.someEvent}
        />
        <Politicians politicians={filtered} loggedin={this.state.loggedin} />
      </div>
    );
  }
}

export default LandingPage;
