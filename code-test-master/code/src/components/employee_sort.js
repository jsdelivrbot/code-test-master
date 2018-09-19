import React,{Component} from 'react';

//Author Ram Date: 7/10/2018
//Search bar for searching through user input
class EmployeeDropDown extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (<div className="right-align"><select id="sort" onChange={(e)=>this.onInputChange(e.target.value)}>
      <option value="">Sort by</option>
      <option value="firstName">First Name</option>
      <option value="lastName">Last Name</option>
      <option value="age">Age</option>
    </select></div>
    );
  }

  onInputChange(term){
    this.props.onSorting(term);
  }
}

export default EmployeeDropDown;
