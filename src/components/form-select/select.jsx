import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
// import MaterialUISelect from "@material-ui/core/Select";
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
      {/* <select
        id={filterOrder}
        onChange={className === "filterBy" ? setFilterBy : setSortBy}
      >
        {values.map(value => (
          <option key={value} value={value} className={filterOrder}>
            {value}
          </option>
        ))}
      </select> */}
    </FormControl>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilterBy: value => dispatch(setFilterBy(value.target.value)),
  setSortBy: select =>
    dispatch(setSortBy(select.target.id, select.target.value))
});

export default connect(null, mapDispatchToProps)(Select);
// export default Select;
