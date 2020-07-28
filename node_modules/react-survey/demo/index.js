import React from "react";
import ReactDOM from "react-dom";
import ReactSurvey from "../src/index";
import { fakeSurvey } from "./data";

require("./minimalist.css");

ReactDOM.render(
  <ReactSurvey data={fakeSurvey} />,
  document.getElementById("root")
);
