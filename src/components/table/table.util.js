export const tableUtil = (filteredEmployees, search, filterBy, sortBy) => {
  //! Filter by search
  if (filterBy === "all") {
    filteredEmployees = filteredEmployees.filter(employeeObj => {
      return Object.values(employeeObj)
        .join("")
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase().toString());
    });
  } else {
    filteredEmployees = filteredEmployees.filter(el => {
      return typeof el[filterBy] === "number"
        ? `${el[filterBy]}`.includes(search)
        : el[filterBy].toLowerCase().includes(search.toLowerCase());
    });
  }

  //! Sort by multiple select options
  //* Util 1: Multiple sorting function
  // firstBy function is taken from Teun Duynstee's ThenBy.js library
  // https://github.com/Teun/thenBy.js/blob/master/thenBy.js
  const firstBy = (function() {
    function extend(f) {
      // f: firstBy's param(first comparison func)
      f.thenBy = tb;
      return f;
    }

    function tb(y) {
      const x = this; // this === f
      return extend(function(a, b) {
        return x(a, b) || y(a, b); // if first func return 0(equal) => compare with next func: y(a,b)
      });
    }
    return extend;
  })();

  //* Util 2: sort() callback func(character, number, ascending, descending)
  function sortCallBackFunc(value) {
    const sortName = value.split("-")[0];
    const order = value.split("-")[1];

    if (sortName === "ext" && order === "ascending") {
      return function(v1, v2) {
        return v1[sortName] - v2[sortName];
      };
    } else if (sortName === "ext" && order === "descending") {
      return function(v1, v2) {
        return v2[sortName] - v1[sortName];
      };
    } else if (sortName !== "ext" && order === "ascending") {
      return function(v1, v2) {
        return v1[sortName] < v2[sortName]
          ? -1
          : v1[sortName] > v2[sortName]
          ? 1
          : 0;
      };
    } else {
      return function(v1, v2) {
        return v2[sortName] < v1[sortName]
          ? -1
          : v2[sortName] > v1[sortName]
          ? 1
          : 0;
      };
    }
  }

  //* Only when sortBy arr has a valid value of sort
  if (sortBy.some(el => el && el !== "none")) {
    let sorting;

    //* 1. Create sorting (multiple sort standards)
    for (let i = 0; i < sortBy.length; i++) {
      // When it's an invalid sort value, pass the loop
      if (sortBy[i] && sortBy[i] !== "none") {
        // First time to sort or not?
        if (!sorting) {
          sorting = firstBy(sortCallBackFunc(sortBy[i]));
          console.log("🐹sorting: firstBy", sorting);
        } else {
          sorting = sorting.thenBy(sortCallBackFunc(sortBy[i]));
          console.log("🦊sorting: thenBy", sorting);
        }
      }
    }

    //* 2. Sort data
    return filteredEmployees.sort(sorting);
  }
  return filteredEmployees;
};
