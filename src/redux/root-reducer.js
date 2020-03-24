import { combineReducers } from "redux";

import employeeReducer from "./employee/employee.reducer";
// import filterReducer from "./filter/filter.reducer";

export default combineReducers({
  employees: employeeReducer
  //   filter: filterReducer
});
