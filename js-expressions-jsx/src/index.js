import React from "react";
import ReactDOM from "react-dom";

const name="Ulises"
const lname="Juarez"
const number=7

ReactDOM.render(
<div>
<h1>Hello {name} {lname}!</h1>
<h1>Hello {name+" "+lname}!</h1>
<h1>{`${name} ${lname}`}</h1>
<p>Your lucky number is {Math.floor(Math.random()*10)}</p>
</div>
,document.getElementById("root"))