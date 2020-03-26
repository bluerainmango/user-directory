import React from "react";
import { connect } from "react-redux";

import Row from "../row/row";

import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { tableUtil } from "./table.util";
import "./table.css";

const Table = props => {
  let { filteredEmployees, search, filterBy, sortBy } = props;

  //! Filter & Sort employees
  filteredEmployees = tableUtil(filteredEmployees, search, filterBy, sortBy);

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

export default connect(mapStateToProps)(Table);
