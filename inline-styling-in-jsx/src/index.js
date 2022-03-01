import React from "react";
import ReactDOM from "react-dom";

const custom = {
  color: "red",
  fontSize: "20px",
  border: "1px solid blue",
  fontFamily: "fantasy"
};

custom.color = "blue";

ReactDOM.render(
  <h1 style={custom}>Hello World!</h1>,
  document.getElementById("root")
);
