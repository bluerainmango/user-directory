import React from "react";
import Select from "../form-select/select";
import Input from "../form-input/input";

const SearchBox = () => (
  <div>
    <Select
      className="sortBy"
      values={["all", "name", "ext", "email", "dept", "position"]}
    />
    <Input className="search" />
    <Select
      className="filterBy"
      values={["name", "ext", "email", "dept", "position"]}
    />
  </div>
);

export default SearchBox;
