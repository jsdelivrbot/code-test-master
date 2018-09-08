import { combineReducers } from 'redux';
import EmployeeList from './reducer_employees';
import CompanyInfo from './reducer_company';
import ActiveEmployee from './reducer_employee_selected';
const rootReducer = combineReducers({
  employeeList : EmployeeList,
  companyInfo : CompanyInfo,
  activeEmployee : ActiveEmployee
});

export default rootReducer;
