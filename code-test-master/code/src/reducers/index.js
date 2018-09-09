import { combineReducers } from 'redux';
import EmployeeList from './reducer_employees';
import CompanyInfo from './reducer_company';
import ActiveEmployee from './reducer_employee_selected';
import FilterEmployee from './reducer_employee_filter';
import SortEmployee from './reducer-sort';
const rootReducer = combineReducers({
  employeeList : EmployeeList,
  companyInfo : CompanyInfo,
  activeEmployee : ActiveEmployee,
  filterEmployee: FilterEmployee,
  sortEmployee: SortEmployee
});

export default rootReducer;
