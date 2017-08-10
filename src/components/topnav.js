import React from 'react';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Register from './register';
import SignIn from './signin';
import styles from './styles';

const TopNav = () => (
  <div className="col-md-12">
    <span><img src="https://i.imgur.com/smX5Xaw.png" className='logo-thumb' /></span>
    <div style={styles.topnavIcons}>
      <Register />
      <SignIn />
    </div>
  </div>
);

export default TopNav;
