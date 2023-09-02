import React  from "react";
import  ReactDOM  from "react-dom/client";

const heading  = React.createElement("h1", {id: "head1"}, "Welcome to this Amazing React Series");

console.log(heading);

// const jsxHeading = <h1 id="head11">Welcome to  JSX . Let's Start it</h1>

const jsxHeading = <h1 className="head11">Welcome to Brand New Series on JSX</h1>

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);