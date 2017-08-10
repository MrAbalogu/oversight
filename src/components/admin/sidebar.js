import React from 'react';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar row col-md-3">
        <ul className="sidebar-cont">
          <li>Politicians</li>
          <li>Users</li>
        </ul>
      </div>
    );
  }
}
export default SideBar;
