import React from "react";

const Select = props => (
  <select id={props.className}>
    <option value="name">name</option>
    <option value="email">email</option>
    <option value="dept">dept</option>
    <option value="position">position</option>
  </select>
);

export default Select;
