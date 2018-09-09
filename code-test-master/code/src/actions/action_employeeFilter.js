import React from 'react';
import companyData from '../reducers/sample-data';
export function filterEmployee(term){
  var employeeFilter =JSON.parse(companyData).employees.filter((employee)=>employee.firstName.toLowerCase().includes(term.toLowerCase()));
  console.log(employeeFilter);
  return ({
    type:'EMPLOYEE_FILTER',
    payload: employeeFilter
  });
}
