
//import axios from 'axios';
import companyData from './sample-data';
//import {deepClone} from 'lodash';

//import react from 'react';
export default function()
{
  //console.log(JSON.parse(companyData));
  const EmployeeList = JSON.parse(companyData).employees;
  return EmployeeList;
  //var data = require('./sample-data.json');
  //console.log(companyData);
 //var responseData = {};
 //axios.get('./sample-data.json').then(response => {responseData = response.Data});
 //return companyData;
}
