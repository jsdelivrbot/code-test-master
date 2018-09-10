import React, { Component } from 'react';
import reducer from '../reducers/reducer_employees';
import SearchBar from './search-bar';
import Employee_List from '../container/employee-list';

//Author : Ram Date : 7/10/2018
//Root component HOC
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <Employee_List />
      </div>
    );
  }

}
