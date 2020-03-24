import React from "react";
import { connect } from "react-redux";

import Row from "../row/row";
// import { setSortBy } from "../../redux/employee/employee.actions";

import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Table = props => {
  let { filteredEmployees, search, filterBy, sortBy, setSortBy } = props;
  console.log(filteredEmployees, search, filterBy, sortBy);

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

  // var firstBy = (function() {
  //   function identity(v) {
  //     return v;
  //   }
  //   function ignoreCase(v) {
  //     return typeof v === "string" ? v.toLowerCase() : v;
  //   }
  //   function makeCompareFunction(f, opt) {
  //     opt = typeof opt === "number" ? { direction: opt } : opt || {};
  //     if (typeof f != "function") {
  //       var prop = f;
  //       // make unary function
  //       f = function(v1) {
  //         return !!v1[prop] ? v1[prop] : "";
  //       };
  //     }
  //     if (f.length === 1) {
  //       // f is a unary function mapping a single item to its sort score
  //       var uf = f;
  //       var preprocess = opt.ignoreCase ? ignoreCase : identity;
  //       var cmp =
  //         opt.cmp ||
  //         function(v1, v2) {
  //           return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  //         };
  //       f = function(v1, v2) {
  //         return cmp(preprocess(uf(v1)), preprocess(uf(v2)));
  //       };
  //     }
  //     if (opt.direction === -1)
  //       return function(v1, v2) {
  //         return -f(v1, v2);
  //       };
  //     return f;
  //   }
  //   /* adds a secondary compare function to the target function (`this` context)
  //        which is applied in case the first one returns 0 (equal)
  //        returns a new compare function, which has a `thenBy` method as well */
  //   function tb(func, opt) {
  //     /* should get value false for the first call. This can be done by calling the
  //         exported function, or the firstBy property on it (for es6 module compatibility)
  //         */
  //     var x = typeof this == "function" && !this.firstBy ? this : false;
  //     var y = makeCompareFunction(func, opt);
  //     var f = x
  //       ? function(a, b) {
  //           return x(a, b) || y(a, b);
  //         }
  //       : y;
  //     f.thenBy = tb;
  //     return f;
  //   }
  //   tb.firstBy = tb;
  //   return tb;
  // })();

  const res = filteredEmployees.sort(
    firstBy(function(v1, v2) {
      return v1.name < v2.name ? -1 : v1.name > v2.name ? 1 : 0;
    }).thenBy(function(v1, v2) {
      return v1.dept - v2.dept;
    })
  );

  console.log("🐷res: ", res);

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
