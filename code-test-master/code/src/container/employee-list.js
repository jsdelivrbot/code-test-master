import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualEmployee from '../components/individual_employee';
import SearchBar from '../components/search-bar';
import {selectEmployee} from '../actions/index';
import {filterEmployee} from '../actions/action_employeeFilter';
import { bindActionCreators } from 'redux';
import Employee_Detail from './employee_detail';
import Modal from 'react-responsive-modal';
import EmployeeCard from '../components/employee_card';



class Employee_List extends Component{
   state = {open : false};
  togglePopUp(employee){
    this.props.selectEmployee(employee);
    this.setState({open : true});
  }
  fetchEmployeeSearchList(term){
    this.props.filterEmployee(term);
     //this.props.employeeList.filter((employee)=>employee.firstName.search(term) > -1);
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
    console.log(employeeListFinal);
    return employeeListFinal.map((employee) => {
        return (<div onClick={()=>this.togglePopUp(employee)}><EmployeeCard  key={employee.id} employee={employee}></EmployeeCard></div>);
    });
  }
  render(){

    return(<div><table className="table table-hover">
          <thead>
            <tr>
                <td><h1>{this.props.companyInfo.companyName}</h1>{this.props.companyInfo.companyMotto}</td>

                <td>Since {this.props.companyInfo.companyEst}</td>
            </tr>
            <tr>
            <td><h3>Our Employees</h3></td>
            <td></td>
            <td>
                <div><SearchBar onSearchTermChange={term => this.fetchEmployeeSearchList(term) }/></div>
            </td>
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
      <div>{this.renderlist()}</div>
      <Employee_Detail open={this.state} onClosePopUp = {() => this.closePopUp()} /></div>
    );
  //  return(
  //  <ul className = "list-group col-md-4">
  //  {this.renderlist()}
    //</ul>);
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
