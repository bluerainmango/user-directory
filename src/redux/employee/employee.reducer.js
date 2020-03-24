import { employees } from "./employee.data";

const INITIAL_STATE = {
  filteredEmployees: employees,
  filterBy: null,
  sortBy: null
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        filteredEmployees: action.payload
      };
    case "SORT_EMPLOYEES":
      return {
        ...state,
        filteredEmployees: action.payload
      };

    default:
      return state;
  }
};

export default employeeReducer;
