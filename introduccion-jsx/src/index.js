import React from "react";
import ReactDOM from "react-dom";  

ReactDOM.render(
<div>
<h1>Hello world!</h1><p>This is a paragraph</p>
</div>,document.getElementById("root"));

var h1=document.createElement("h1");
h1.innerHTML="Hello World!";
document.getElementById("root").appendChild(h1)