import { employees } from "./employee.data";

const INITIAL_STATE = {
  filteredEmployees: employees,
  filterBy: "all",
  sortBy: [null, null, null],
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
      // Copy sortBy array and mutate it
      let copiedSortBy = [...state.sortBy];
      copiedSortBy.splice(action.payloadFirst, 1, action.payloadSecond);

      return {
        ...state,
        sortBy: copiedSortBy
      };

    case "SET_SEARCH":
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
