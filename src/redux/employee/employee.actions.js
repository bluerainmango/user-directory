export const filterEmployees = employees => ({
  type: "FILTER_EMPLOYEES",
  payload: employees
});

export const setFilterBy = filter => ({
  type: "SET_FILTER_BY",
  payload: filter
});

export const setSortBy = (id = null, sort) => ({
  type: "SET_SORT_BY",
  payloadFirst: id,
  payloadSecond: sort
});

export const setSearch = search => ({
  type: "SET_SEARCH",
  payload: search
});

export const sortEmployees = employees => ({
  type: "SORT_EMPLOYEES",
  payload: employees
});
