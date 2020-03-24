import React from "react";

import { connect } from "react-redux";

const Select = ({ className, values }) => (
  <select id={className}>
    {values.map(value => (
      <option value={value}>{value}</option>
    ))}
  </select>
);

// const mapDispatchToProps = dispatch => ({
//   set
// });
// export default connect(null)(Select);
export default Select;
