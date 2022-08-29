import React from "react";

//*********** same output *******************
const heading = <h1 className="site-heading">Hello, React. .</h1>;

const heading2 = React.createElement(
  "h1",
  { className: "site-heading" },
  "Hello React. . ."
);
//*********** same output *******************

const name = "Can";
const heading3 = <h1>Hello, {name}</h1>;

export { heading3, heading, heading2 };
