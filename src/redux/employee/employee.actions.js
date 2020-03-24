export const filterEmployees = employees => ({
  type: "FILTER_EMPLOYEES",
  payload: employees
});

export const sortEmployees = employees => ({
  type: "SORT_EMPLOYEES",
  payload: employees
});
