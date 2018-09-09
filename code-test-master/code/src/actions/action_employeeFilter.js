import React from 'react';
import companyData from '../reducers/sample-data';
export function filterEmployee(term,sortTerm=null){
if(!sortTerm){
  var employeeFilter =JSON.parse(companyData).employees.filter((employee)=>employee.firstName.toLowerCase().includes(term.toLowerCase()));
  return ({
    type:'EMPLOYEE_FILTER',
    payload: employeeFilter
  });
}
else{
  var employeeFilter =JSON.parse(companyData).employees.filter((employee)=>employee.firstName.toLowerCase().includes(term.toLowerCase()));
   var employeeSort = _.sortByOrder(employeeFilter, [sortTerm],['asc']);
    return ({
      type:'EMPLOYEE_FILTER',
      payload: employeeSort
    });
}

}
