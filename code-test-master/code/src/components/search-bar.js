import React,{Component} from 'react';

//Author Ram Date: 7/10/2018
//Search bar for searching through user input
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (<div>
      <input value = {this.state.term} onChange={event => this.onInputChange(event.target.value)} placeholder="Search"/>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
