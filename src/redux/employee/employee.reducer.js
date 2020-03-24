import { employees } from "./employee.data";

const INITIAL_STATE = {
  filteredEmployees: employees,
  filterBy: "all",
  sortBy: [null, null, null, null, null],
  search: ""
};

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_EMPLOYEES":
      return {
        ...state,
        filteredEmployees: action.payload
      };
    case "SET_FILTER_BY":
      return {
        ...state,
        filterBy: action.payload
      };
    case "SET_SORT_BY":
      console.log("🦁 set sort by", action);
      INITIAL_STATE.sortBy.splice(action.payloadFirst, 1, action.payloadSecond);
      return {
        ...state,
        sortBy: INITIAL_STATE.sortBy
      };
    case "SET_SEARCH":
      console.log("reducer: set search", state);
      return {
        ...state,
        search: action.payload
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
