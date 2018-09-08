import React, {Component} from 'react';
import {connect} from 'react-redux';
import IndividualEmployee from '../components/individual_employee';
import SearchBar from '../components/search-bar';
import {selectEmployee} from '../actions/index';
import { bindActionCreators } from 'redux';
import Employee_Detail from './employee_detail';

class Employee_List extends Component{

  renderlist(){

    return this.props.employeeList.map((employee) => {
      const imageUrl = employee.avatar;
      return (
          <tr key={employee.id} onClick={() => this.props.selectEmployee(employee)}>
          <td>
            <div className="video-list media">
              <div className="media-left">
                <img className="media-object" src={imageUrl} />
              </div>
              <div className="media-body">
                <div className="media-heading">{employee.firstName} {employee.lastName}</div>
                {employee.bio}
              </div>
            </div>
          </td>
          </tr>

      //  <IndividualEmployee selectEmployee={this.props.selectEmployee(employee)} key={employee.id} employee={employee} />

        //<li key={employee.id} className= "list-group-item">{employee.firstName}</li>
      );
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

            <td><SearchBar /></td>
            </tr>
          </thead>
          <tbody>

              {this.renderlist()}

          </tbody>
      </table>
      <Employee_Detail /></div>
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
    companyInfo : state.companyInfo
  });
}
//anything returned from here will be as props on the employee-list container
function mapDispatchToProps(dispatch) {
  //whenever this get called, result will be passed to all the reducers
  return bindActionCreators({selectEmployee:selectEmployee},dispatch);
}

//making dispatch method as a prop
export default connect(mapStateToProps,mapDispatchToProps)(Employee_List);
