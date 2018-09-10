import { combineReducers } from 'redux';
import EmployeeList from './reducer_employees';
import CompanyInfo from './reducer_company';
import ActiveEmployee from './reducer_employee_selected';
import FilterEmployee from './reducer_employee_filter';
import SortEmployee from './reducer-sort';
//Author Ram Date: 7/10/2018
//for mapping application states
const rootReducer = combineReducers({
  employeeList : EmployeeList,
  companyInfo : CompanyInfo,
  activeEmployee : ActiveEmployee,
  filterEmployee: FilterEmployee,
  sortEmployee: SortEmployee
});

export default rootReducer;
