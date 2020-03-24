import React from "react";

import { connect } from "react-redux";
import { setFilterBy, setSortBy } from "../../redux/employee/employee.actions";

const Select = ({ className, filterOrder, values, setFilterBy, setSortBy }) => (
  <select
    id={filterOrder}
    onChange={className === "filterBy" ? setFilterBy : setSortBy}
  >
    {values.map(value => (
      <option key={value} value={value} className={filterOrder}>
        {value}
      </option>
    ))}
  </select>
);

const mapDispatchToProps = dispatch => ({
  setFilterBy: value => dispatch(setFilterBy(value.target.value)),
  setSortBy: select =>
    dispatch(setSortBy(select.target.id, select.target.value))
});

export default connect(null, mapDispatchToProps)(Select);
// export default Select;
