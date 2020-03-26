import { employees } from "./employee.data";

const INITIAL_STATE = {
  filteredEmployees: employees,
  filterBy: "all",
  sortBy: [null, null, null, null, null],
  // sortBy: { first: null, second: null, third: null, fourth: null, fifth: null },
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
      // arr or obj?
      console.log("🦁 set sort by", action);
      let copiedSortBy = [...state.sortBy];
      copiedSortBy.splice(action.payloadFirst, 1, action.payloadSecond);

      return {
        ...state,
        sortBy: copiedSortBy
      };
    // const key = {action.payloadFirst: action.payloadSecond}
    // return {
    //   ...state,
    //   sortBy: {
    //     ...state.sortBy,
    //     {...action.payloadFirst : action.payloadSecond}
    //   }
    // };
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
