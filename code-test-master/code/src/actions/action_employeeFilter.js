import React from 'react';
import companyData from '../reducers/sample-data';
import axios from 'axios';

//Author: Ram Date :7/10/2018
//Reducer for filtering user search and sorting mechanism
export function filterEmployee(term,sortTerm=null){

  return ({
    type:'REDUCER_FILTER',
    payload: employeeSort
  });

}
