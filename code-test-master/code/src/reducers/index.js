import { combineReducers } from 'redux';
import EmployeeList from './reducer_employees';
import CompanyInfo from './reducer_company';
import ActiveEmployee from './reducer_employee_selected';
import FilterEmployee from './reducer_employee_filter';
const rootReducer = combineReducers({
  employeeList : EmployeeList,
  companyInfo : CompanyInfo,
  activeEmployee : ActiveEmployee,
  filterEmployee: FilterEmployee
});

export default rootReducer;
