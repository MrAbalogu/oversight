import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import TopNav from './topnav';
import SearchBar from './searchbar';
import Politicians from './politicians';

const REQUEST_URL = 'https://6282da3b.ngrok.io/politicians';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      input: '',
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
  };

  handleUserInput(s){
    this.setState({
      input: s,
    })
  }

  render() {
    const filtered = this.state.data.filter((p) => {
      return (p.name.toLowerCase().indexOf(this.state.input)>-1);
    })
    return (
      <div className='col-md-12 page-container'>
        <TopNav />
        <SearchBar data={filtered} value={this.state.searchText} onUserInput={this.handleUserInput.bind(this)}
                   onClick={this.someEvent} />
        <Politicians politicians={filtered} />
      </div>
    );
  }
}

export default LandingPage;
