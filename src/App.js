import React from "react";
import { connect } from "react-redux";

import { filterEmployees } from "./redux/employee/employee.actions";

import SearchBox from "./components/search-box/search-box";
import "./App.css";
import Table from "./components/table/table";

const App = ({ filterEmployees, filteredEmployees }) => {
  return (
    <div className="app">
      <h1 className="title">Employee Directory</h1>
      <main>
        <SearchBox />
        <Table />
      </main>
    </div>
  );
};

const mapStateToProps = ({ employees }) => ({
  filteredEmployees: employees.filteredEmployees
});

const mapDispatchToProps = dispatch => ({
  filterEmployees: employees => dispatch(filterEmployees(employees))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
