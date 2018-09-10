import React from 'react';
import _ from 'lodash';
import companyData from '../reducers/sample-data';

//Author Ram Date: 7/10/2018
//For sorting functionality
export function sortEmployee(term, employeeList){
  var employeeSort = _.sortByOrder(employeeList, [term],['asc']);
  return ({
    type:'REDUCER_SORT',
    payload: employeeSort
  });
}
