import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Register from './register';
import SignIn from './signin';
import styles from './styles';

class TopNav extends React.Component{
  render() {
    return (
      <div className="col-md-12">
        <span><img alt="logo thumbnail" src="https://i.imgur.com/smX5Xaw.png" className="logo-thumb" /></span>
        <div style={styles.topnavIcons}>
          <Register onUserSubmit={this.props.onUserSubmit.bind(this)} />
          <SignIn onUserSubmit={this.props.onUserSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}
export default TopNav;
