import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      {console.log("store", store)}
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
