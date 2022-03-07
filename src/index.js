import React from "react";
import ReactDOM from "react-dom";
// import Lifecycle from "./reactjsdasar/Lifecycle";
// import App from "./App";
// import Variabel from "./reactjsdasar/Variabel";
// import StateProps from "./reactjsdasar/StateProps";
// import Map from "./reactjsdasar/Map";

import "bootstrap/dist/css/bootstrap.min.css";
import Crud from "./crud/Index";

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById("root")
);
