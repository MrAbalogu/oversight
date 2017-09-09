import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    }
  }

  handleChange() {
    this.setState({
      searchText: searchText
    })
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  handleUpdateInput(s){
    // console.log(s);
    this.props.onUserInput(s);
  }

  render() {
    const searchStyle = {
      color: '#3c763d',
      // display: 'none',
      floatingLabelFocusStyle: {
        color: '#3c763d',
      }
    }
    const mapped_data = this.props.data.map((p) => {
      return p.name.toLowerCase()
    })
    return (
      <div className='col-md-6 col-md-offset-3 search-container'>
        <img src="http://i.imgur.com/LHkPdtS.png" className="landing-logo" />
        <AutoComplete
          className="search-input"
          style={searchStyle}
          floatingLabelText="Search Politician"
          filter={AutoComplete.fuzzyFilter}
          dataSource={mapped_data}
          maxSearchResults={5}
          onUpdateInput={this.handleUpdateInput.bind(this)}
          onChange={this.handleChange.bind(this)}
          underlineStyle={searchStyle}
        />
      </div>
    );
  }

}

export default SearchBar;
