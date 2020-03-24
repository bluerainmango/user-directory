import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Row = ({ employee }) => (
  <TableRow>
    <TableCell>{employee.name}</TableCell>
    <TableCell>{employee.dept}</TableCell>
    <TableCell>{employee.position}</TableCell>
    <TableCell>{employee.ext}</TableCell>
    <TableCell>{employee.email}</TableCell>
  </TableRow>
);

export default Row;
