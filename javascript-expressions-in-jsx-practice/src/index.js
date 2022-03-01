//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "Ulises Juárez";
const current_date = new Date();
const year = current_date.getFullYear();

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
