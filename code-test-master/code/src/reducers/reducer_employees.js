
//Author Ram Date: 7/10/2018
//For fetching the employee array from local json data
import companyData from './sample-data';

export default function()
{

  const EmployeeList = JSON.parse(companyData).employees;
  return EmployeeList;

}
