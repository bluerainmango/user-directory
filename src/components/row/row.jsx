import React from "react";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Row = ({ name, dept, position, ext, email }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{dept}</TableCell>
    <TableCell>{position}</TableCell>
    <TableCell>{ext}</TableCell>
    <TableCell>{email}</TableCell>
  </TableRow>
);

export default Row;
