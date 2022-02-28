//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/counter.jsx";
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
//render your react application
