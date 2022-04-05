// React app main entry point

import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "./index.css";

const appRoot = document.getElementById("root");

ReactDom.render(<App />, appRoot);
