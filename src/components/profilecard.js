import React from 'react';
import Dialog from 'material-ui/Dialog';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showTab: false,
      clicked: false,
      selected: '',
      showProjects: false,
      showLegalCases: false,
      showBudget: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleClick(selected) {
    this.setState({ selected: selected });
    if (selected === 'projects') {
      this.setState({
        showProjects: true,
        showLegalCases: false,
        showBudget: false,
      });
    } else if (selected === 'cases') {
      this.setState({
        showLegalCases: true,
        showProjects: false,
        showBudget: false,
      });
    } else if (selected === 'budget') {
      this.setState({
        showBudget: true,
        showLegalCases: false,
        showProjects: false,
      });
    }
  }

  isActive(selected) {
    return ((selected === this.state.selected) ? 'active' : 'default');
  }

  render() {
    const bgimg = {
      backgroundImage: 'url(' + this.props.avatar  + ')',
    };
    const projectsTab = (
      <ul className="tab-info">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    );
    const legalCasesTab = (
      <ul className="tab-info">
        <li>Case 1</li>
        <li>Case 2</li>
        <li>Case 3</li>
      </ul>
    );
    const budgetTab = (
      <ul className="tab-info">
        <li>Budget 1</li>
        <li>Budget 2</li>
        <li>Budget 3</li>
      </ul>
    );

// ProfileCard Tab Navigation
    let tabDisplay;
    if (this.state.showProjects) {
      tabDisplay = projectsTab;
    } else if (this.state.showLegalCases) {
      tabDisplay = legalCasesTab;
    } else if (this.state.showBudget) {
      tabDisplay = budgetTab;
    }
// ...........

// Loggedin Rate input display
    let rate;
    if (this.props.loggedin === false ) {
      rate = null;
    } else {
      rate = <p className="rate-tab"><i>Your rating:</i> <input className="rate-input" placeholder="0" />% </p>;
    }
// ..........

// Loggedin Your Rating display
    let myrating;
    if (this.props.loggedin === false ) {
      myrating = null;
    } else {
      myrating = <p className="my-rating"><i>Your rating:</i> <span>0%</span> </p>;
    }
// ..........


    return (
      <div>
        <div className="card-container" onClick={this.handleOpen.bind(this)}>
          <div className="card-img" style={bgimg}>
          </div>
          <div className="card-details">
            <p className="card-name">{this.props.name}</p>
            <p className="card-post">{this.props.post}</p>
            <p className="card-state">{this.props.state}</p>
            <p className="card-dob">Age: {this.props.dob} <span>80%</span></p>
            {myrating}
          </div>
        </div>
        <Dialog
          title={this.props.name}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <div className="image-cont">
            <img src={this.props.avatar} alt="avatar"/>
          </div>
          <div className="info-cont">
            <ul>
              <li>Name: <b>{this.props.name}</b></li>
              <li>Post: <b>{this.props.post}</b></li>
              <li>State: <b>{this.props.state}</b></li>
              <li>DOB: <b>{this.props.dob}</b></li>
              <li>Party: <b>{this.props.party}</b></li>
              {rate}
            </ul>
          </div>
          <ul className='navigation-cont'>
            <li className={this.isActive('projects')} onClick={this.handleClick.bind(this, 'projects')}>Projects</li>
            <li className={this.isActive('cases')} onClick={this.handleClick.bind(this, 'cases')}>Cases</li>
            <li className={this.isActive('budget')} onClick={this.handleClick.bind(this, 'budget')}>Budget</li>
          </ul>
          {tabDisplay}
        </Dialog>
      </div>
    );
  }
}

export default ProfileCard;
