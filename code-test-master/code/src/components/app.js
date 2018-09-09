import React, { Component } from 'react';
import reducer from '../reducers/reducer_employees';
import SearchBar from './search-bar';
import Employee_List from '../container/employee-list';

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
