import React from 'react';

class PoliticiansTable extends React.Component {
  render() {
    const tablerow = this.props.politicians.map(p => {
      return (
        <tr>
          <td>{p.name}</td>
          <td>{p.state}</td>
          <td>{p.current_post}</td>
          <td>{p.rating}</td>
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
export default PoliticiansTable;
