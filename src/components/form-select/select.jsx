import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

import { connect } from "react-redux";
import { setFilterBy, setSortBy } from "../../redux/employee/employee.actions";

const Select = ({ className, filterOrder, values, setFilterBy, setSortBy }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="age-native-helper">
        {filterOrder ? `Criteria ${Number(filterOrder) + 1}` : "Filter By"}
      </InputLabel>
      <NativeSelect
        id={filterOrder}
        onChange={className === "filterBy" ? setFilterBy : setSortBy}
      >
        {values.map(value => (
          <option key={value} value={value} className={filterOrder}>
            {value}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilterBy: value => dispatch(setFilterBy(value.target.value)),
  setSortBy: select =>
    dispatch(setSortBy(select.target.id, select.target.value))
});

export default connect(null, mapDispatchToProps)(Select);
