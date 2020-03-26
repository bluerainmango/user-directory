import React from "react";
import { connect } from "react-redux";

import { filterEmployees } from "./redux/employee/employee.actions";

import SearchBox from "./components/search-box/search-box";
// import Condition from "./components/condition/condition";
import "./App.css";
import Table from "./components/table/table";

const App = ({ filterEmployees, filteredEmployees }) => {
  return (
    <div>
      <div className="title">Employee Directory</div>
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

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
