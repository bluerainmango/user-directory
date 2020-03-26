import React from "react";
import { connect } from "react-redux";

import { setSearch } from "../../redux/employee/employee.actions";
import Select from "../form-select/select";
import TextField from "@material-ui/core/TextField";
// import Input from "../form-input/input";

const SearchBox = ({ setSearch, setSortBy }) => (
  <div>
    <div>
      <Select
        className="filterBy"
        values={["all", "name", "ext", "email", "dept", "position"]}
      />
      <TextField
        id="standard-basic"
        label="Type here"
        className="search"
        onChange={setSearch}
      />
    </div>

    {/* <input type="text" className="search" onChange={setSearch} /> */}
    {["0", "1", "2", "3", "4"].map(el => (
      <Select
        key={el}
        filterOrder={el}
        className="sortBy"
        values={[
          "none",
          "name-ascending",
          "name-descending",
          "ext-ascending",
          "ext-descending",
          "email-ascending",
          "email-descending",
          "dept-ascending",
          "dept-descending",
          "position-ascending",
          "position-descending"
        ]}
        // onChange={setSortBy}
      />
    ))}
  </div>
);

const mapDispatchToProps = dispatch => ({
  setSearch: search => dispatch(setSearch(search.target.value))
  // setSortBy: select =>
  //   dispatch(setSortBy(select.target.id, select.target.value))
});

export default connect(null, mapDispatchToProps)(SearchBox);
