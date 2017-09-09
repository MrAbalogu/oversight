import React from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles';

class Profile extends React.Component{
  render() {
    const title = 'Prince Abalogu';
    return (
      <div className="col-md-12">
        <span><img alt="logo thumbnail" src="https://i.imgur.com/smX5Xaw.png" className="logo-thumb" /></span>
        <div style={styles.topnavIcons} className="float-left">
          <SplitButton bsStyle={title.toLowerCase()} title={title}>
            <MenuItem eventKey="1">Edit Profile</MenuItem>
            <MenuItem eventKey="2"><Link to="/all">All Politicians</Link></MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Logout</MenuItem>
          </SplitButton>
        </div>
      </div>
    );
  }
}
export default Profile;
