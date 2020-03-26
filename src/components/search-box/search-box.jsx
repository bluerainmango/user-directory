import React from "react";
import { connect } from "react-redux";

import { setSearch } from "../../redux/employee/employee.actions";
import Select from "../form-select/select";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import "./search-box.css";

const SearchBox = ({ setSearch, setSortBy }) => (
  <div className="searchBox">
    <div className="search">
      <p className="title withIcon">
        <FilterListIcon />
        Filter
      </p>
      <Select
        className="filterBy"
        values={["all", "name", "ext", "email", "dept", "position"]}
      />
      <TextField
        id="standard-basic"
        label="Type search keyword"
        className="search"
        onChange={setSearch}
      />
    </div>
    <p className="title withIcon">
      <SortByAlphaIcon />
      Sort
    </p>
    {["0", "1", "2"].map(el => (
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
      />
    ))}
  </div>
);

const mapDispatchToProps = dispatch => ({
  setSearch: search => dispatch(setSearch(search.target.value))
});

export default connect(null, mapDispatchToProps)(SearchBox);
