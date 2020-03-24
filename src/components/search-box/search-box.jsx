import React from "react";
import { connect } from "react-redux";

import { setSearch, setSortBy } from "../../redux/employee/employee.actions";
import Select from "../form-select/select";
// import Input from "../form-input/input";

const SearchBox = ({ setSearch, setSortBy }) => (
  <div>
    <Select
      className="filterBy"
      values={["all", "name", "ext", "email", "dept", "position"]}
    />
    <input type="text" className="search" onChange={setSearch} />
    {[0, 1, 2, 3, 4].map(el => (
      <Select
        key={el}
        filterOrder={el}
        className="sortBy"
        values={["none", "name", "ext", "email", "dept", "position"]}
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
