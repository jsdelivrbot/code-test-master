import React from 'react';
import _ from 'lodash';
import companyData from '../reducers/sample-data';
export function sortEmployee(term, employeeList){
  var employeeSort = _.sortByOrder(employeeList, [term],['asc']);
  return ({
    type:'REDUCER_SORT',
    payload: employeeSort
  });
}
