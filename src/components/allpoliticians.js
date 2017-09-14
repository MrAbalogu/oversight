import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfileCard from './profilecard';

const REQUEST_URL = 'https://6bf8cb94.ngrok.io/politicians';

class AllPoliticians extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: '',
    };
  }

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

  render() {
    const filtered = this.state.data.filter((p) => {
      return (p.name.toLowerCase().indexOf(this.state.input) > -1);
    });

    const politicians = this.state.data.map((politician, key) => {
      return (
        <div key={politician.id} className="all-politicians-card">
          <ProfileCard
            name={politician.name}
            avatar={politician.avatar}
            post={politician.portfolio}
            state={politician.state}
            dob={politician.dob}
            party={politician.party}
            // loggedin={this.props.loggedin}
          />
        </div>
      );
    });

    return (
      <MuiThemeProvider>
        <div className="col-md-12">
          {politicians}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AllPoliticians;
