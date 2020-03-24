import React from "react";
import Select from "../../components/form-select/select";
import Input from "../../components/form-input/input";

const Search = () => (
  <div>
    <Select className="sortBy" />
    <Input className="search" />
  </div>
);

export default Search;
