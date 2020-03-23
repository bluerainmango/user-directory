import React, { Component } from "react";

import employee from "./dev-data/seeds.json";
import Input from "./components/form-input/input";
import Condition from "./components/condition/condition";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="title">Employee Directory</div>
        <main>
          <Input className="search" />
          <Condition />
        </main>
      </div>
    );
  }
}

export default App;
