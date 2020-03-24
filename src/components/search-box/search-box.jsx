import React from "react";
import { connect } from "react-redux";

import { setSearch } from "../../redux/employee/employee.actions";
import Select from "../form-select/select";
// import Input from "../form-input/input";

const SearchBox = ({ setSearch }) => (
  <div>
    <Select
      className="filterBy"
      values={["all", "name", "ext", "email", "dept", "position"]}
    />
    <input type="text" className="search" onChange={setSearch} />
    <Select
      className="sortBy"
      values={["name", "ext", "email", "dept", "position"]}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  setSearch: search => dispatch(setSearch(search.target.value))
});

export default connect(null, mapDispatchToProps)(SearchBox);
