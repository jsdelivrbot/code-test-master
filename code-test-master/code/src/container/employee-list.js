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
import Moment from 'react-moment';



class Employee_List extends Component{
   state = {open : false};
  togglePopUp(employee){
    this.props.selectEmployee(employee);
    this.setState({open : true});
  }
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
  fetchEmployeeSearchList(term,sortTerm = null){
    this.props.filterEmployee(term,sortTerm);

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
    return employeeListFinal.map((employee) => {
        return (<div style={{width:'30%', cursor:'pointer'}} onClick={()=>this.togglePopUp(employee)}><EmployeeCard  key={employee.id} employee={employee}></EmployeeCard></div>);
    });
  }
  render(){

    return(<div>

      <table className="table table-hover">

          <thead>
            <tr>
                <td className="border-class"><h3>{this.props.companyInfo.companyName}</h3>
                {this.props.companyInfo.companyMotto}
                </td>
                <td className="border-class"></td>
                  <td className="border-class">
                    <div style={{float:'right'}}>  Since <Moment format="YYYY" date={this.props.companyInfo.companyEst} /></div>
                  </td>


            </tr>

            <tr>
            <td className="border-end"><h5>Our Employees</h5></td>
            <td className="border-end"></td>
            <td className="border-end">
            <div className="right-float">
            <div style={{padding:'8px'}}><select id="sort" onChange={(e)=>this.fetchEmployeeSearchList("",e.target.value,)}>
              <option value="firstName">Sort by</option>
              <option value="firstName">First Name</option>
              <option value="lastName">Last Name</option>
            </select></div>
            <div style={{padding:'8px',height:'3px'}}><SearchBar onSearchTermChange={term => this.fetchEmployeeSearchList(term) }/></div>
            </div>
            </td>
            </tr>
          </thead>
          <tbody>
          </tbody>
      </table>

      <div className="container">{this.renderlist()}</div>
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
