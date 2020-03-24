import React from "react";
import { connect } from "react-redux";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import Row from "../row/row";

const Table = ({ filteredEmployees }) => (
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
      {filteredEmployees.map(employee => (
        <Row key={employee.id} employee={employee} />
      ))}
    </TableBody>
  </table>
);

const mapStateToProps = ({ employees }) => ({
  filteredEmployees: employees.filteredEmployees
});

export default connect(mapStateToProps)(Table);
