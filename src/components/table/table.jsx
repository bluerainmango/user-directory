import React from "react";
import { connect } from "react-redux";

import Row from "../row/row";
// import { setSortBy } from "../../redux/employee/employee.actions";

import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Table = props => {
  let { filteredEmployees, search, filterBy, sortBy } = props;
  // console.log(filteredEmployees, search, filterBy, sortBy);

  // Filter by search
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

  // Sort
  const firstBy = (function() {
    function extend(f) {
      f.thenBy = tb;
      return f;
    }

    function tb(y) {
      const x = this;
      return extend(function(a, b) {
        return x(a, b) || y(a, b);
      });
    }
    return extend;
  })();

  console.log(sortBy); // ["name-asc", null, null, null, null]
  // {first: "", second: "", third: ""}

  // //! Only when sortBy arr has a valid value of sort
  if (sortBy.some(el => el && el !== "none")) {
    console.log("inside");

    let sorting;

    for (let i = 0; i < sortBy.length; i++) {
      //! When it's invalid, pass loop
      if (sortBy[i] && sortBy[i] !== "none") {
        //! if this the first time to sort
        if (!sorting) {
          sorting = firstBy(sortCallBackFunc(sortBy[i]));
          console.log("🐹sorting: firstBy", sorting);
        } else {
          sorting = sorting.thenBy(sortCallBackFunc(sortBy[i]));
          console.log("🦊sorting: thenBy", sorting);
        }
      }
    }

    filteredEmployees.sort(sorting);

    // for (let i = 0; i < sortBy.length; i++) {
    //   //! When it's invalid, pass loop
    //   if (sortBy[i] && sortBy[i] !== "none") {
    //     //! if this the first time to sort
    //     if (!sorting) {
    //       sorting = firstBy(sortCallBackFunc(sortBy[i]));
    //       console.log("🐹sorting: firstBy", sorting);
    //       filteredEmployees.sort(firstBy(sorting));
    //     } else {
    //       sorting = sorting.thenBy(sortCallBackFunc(sortBy[i]));
    //       console.log("🦊sorting: thenBy", sorting);
    //     }
    //   }
    // }
  }

  //! character or num?
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

  //! Example

  // let test = firstBy(function(v1, v2) {
  //   return v1.name < v2.name ? -1 : v1.name > v2.name ? 1 : 0;
  // });
  // test = test.thenBy(function(v1, v2) {
  //   return v1.ext - v2.ext;
  // });

  // filteredEmployees.sort(test);

  // filteredEmployees.sort(
  //   firstBy(function(v1, v2) {
  //     return v1.name < v2.name ? -1 : v1.name > v2.name ? 1 : 0;
  //   }).thenBy(function(v1, v2) {
  //     return v1.ext - v2.ext;
  //   })
  // );

  return (
    <table>
      <TableHead>
        <TableRow>
          <TableCell id="name">NAME</TableCell>
          <TableCell id="dept">DEPT</TableCell>
          <TableCell id="position">POSITION</TableCell>
          <TableCell id="ext">EXT</TableCell>
          <TableCell id="email">EMAIL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredEmployees.map(({ id, ...otherProps }) => (
          <Row key={id} {...otherProps} />
        ))}
      </TableBody>
    </table>
  );
};

const mapStateToProps = ({ employees }) => ({
  filteredEmployees: employees.filteredEmployees,
  search: employees.search,
  filterBy: employees.filterBy,
  sortBy: employees.sortBy
});

// const mapDispatchToProps = dispatch => ({
//   setSortBy: value => dispatch(setSortBy(value.target.id))
// });

export default connect(mapStateToProps)(Table);
