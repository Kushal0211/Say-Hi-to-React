import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("h1",{},"Hello i am inside div ")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);