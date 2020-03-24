import React from "react";
import { connect } from "react-redux";

import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Row from "../row/row";
import { employees } from "../../redux/employee/employee.data";

const Table = ({ filteredEmployees, search, filterBy, sortBy }) => {
  console.log(filteredEmployees, search, filterBy, sortBy);

  const employeeArr = filteredEmployees.filter(el => {
    return el.name.includes(search);
  });
  console.log("😉filtered", employeeArr);

  return (
    <table>
      <TableHead>
        <TableRow>
          <TableCell>NAME</TableCell>
          <TableCell>DEPT</TableCell>
          <TableCell>POSITION</TableCell>
          <TableCell>EXT</TableCell>
          <TableCell>EMAIL</TableCell>
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

export default connect(mapStateToProps)(Table);
