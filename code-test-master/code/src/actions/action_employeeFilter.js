import React from 'react';
import axios from 'axios';

//Author: Ram Date :7/10/2018
//Reducer for filtering user search and sorting mechanism
export function filterEmployee(){
  const ax = axios.create({
    baseURL: 'http://localhost:8080/'
  });
  const employeePayload = ax.get('sample-data.json');
  return ({
    type:'REDUCER_FILTER',
    payload: employeePayload
  });
}
