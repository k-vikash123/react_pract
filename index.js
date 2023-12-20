
import React from "react";
import ReactDOM from "react-dom";

let div1 = React.createElement("div",{"id":"parent"},
  React.createElement("div",{"id":"child"},
  [React.createElement("h1",{},"I'm an h1 tag."),
  React.createElement("h2",{},"I'm an h2 tag")]
  ));



  let root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(div1);