import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
