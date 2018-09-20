import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualEmployee from '../components/individual_employee';
import SearchBar from '../components/search-bar';
import {selectEmployee} from '../actions/index';
import {filterEmployee} from '../actions/action_employeeFilter';
import {sortEmployee} from '../actions/action_employeesort';
import { bindActionCreators } from 'redux';
import Employee_Detail from './employee_detail';
import Modal from 'react-responsive-modal';
import EmployeeCard from '../components/employee_card';
import EmployeeDropDown from '../components/employee_sort';
import EmployeeHeader from '../components/employee_header';
import 'airbnb-browser-shims';

//Author :Ram, Date :7/10/2018
//Main component which encloses cards and dropdowns of the employees
class Employee_List extends Component{
   state = {open : false};
   //for toggling the Model popup window on click of employee card
  togglePopUp(employee){
    this.props.selectEmployee(employee);
    this.setState({open : true});
  }
  //for sorting
  sortEmp(term){
      var empList = this.props.employeeList;
      if(!this.props.employeeFilter){
        empList = this.props.employeeList;
      }
     else{
       empList = this.props.employeeFilter;
     }
    this.props.sortEmployee(term,empList);
  }

  //for filtering based on search
  fetchEmployeeSearchList(term,sortTerm = null){
    this.props.filterEmployee(term,sortTerm);
  }

  closePopUp(){
    this.setState({open : false});
  }

  renderlist(){
    var employeeListFinal = this.props.employeeList;
    if(!this.props.employeeFilter){
      employeeListFinal = this.props.employeeList;
    }
    else {
      employeeListFinal = this.props.employeeFilter;
    }

    return employeeListFinal.map((employee) => {
      console.log(employee);
        return (<EmployeeCard  key={employee.id} onClick={()=>this.togglePopUp(employee)} employee={employee}></EmployeeCard>);
    });
  }
  render(){
    return(
      <div>
        <EmployeeHeader companyInfo={this.props.companyInfo} />
        <div className="header-container">
          <EmployeeDropDown onSorting={term=>this.fetchEmployeeSearchList('',term)} />
          <div className="right-align"><SearchBar onSearchTermChange={term => this.fetchEmployeeSearchList(term) } /></div>
        </div>
        <div className="clear-float"></div>
        <div className="container">{this.renderlist()}</div>
        <Employee_Detail open={this.state} onClosePopUp = {() => this.closePopUp()} />
      </div>
    );
  }
}

//mapping state to props so that it can be later passed on a params to the container
function mapStateToProps(state){
  return ({
    employeeList : state.employeeList,
    companyInfo : state.companyInfo,
    employeeFilter : state.filterEmployee
  });
}
//anything returned from here will be as props on the employee-list container
function mapDispatchToProps(dispatch) {
  //whenever this get called, result will be passed to all the reducers
  return bindActionCreators(Object.assign({},{selectEmployee:selectEmployee},{filterEmployee:filterEmployee}),dispatch);
}


//making dispatch method as a prop
export default connect(mapStateToProps,mapDispatchToProps)(Employee_List);
