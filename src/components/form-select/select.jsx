import React from "react";

import { connect } from "react-redux";
import { setFilterBy, setSortBy } from "../../redux/employee/employee.actions";

const Select = ({ className, values, setFilterBy, setSortBy }) => (
  <select
    id={className}
    onChange={className === "filterBy" ? setFilterBy : setSortBy}
  >
    {values.map(value => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
);

const mapDispatchToProps = dispatch => ({
  setFilterBy: value => dispatch(setFilterBy(value.target.value)),
  setSortBy: value => dispatch(setSortBy(value.target.value))
});

export default connect(null, mapDispatchToProps)(Select);
// export default Select;
