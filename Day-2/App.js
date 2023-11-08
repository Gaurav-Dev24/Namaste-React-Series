import React from "react";
import ReactDOM from "react-dom/client"; // note always use "react-dom/client" to import ReactDOM

const heading = React.createElement(
  "h1",
  { className: "title", key: "h1" }, // specifying key for multiple child elements in container
  "Namaste React"
);
const paragraph = React.createElement(
  "p",
  { className: "description", key: "p" }, // specifying key for multiple child elements in container
  "Hello this is paragraph"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  paragraph,
]); // if we have multiple childs for an element we have to give them a unique key which can be anything
// console.log(heading)
// console.log(paragraph)
//   use correct dom function to call class or id
const root = ReactDOM.createRoot(document.getElementById("root"));
//   to render single element and it takes only one argument
//   root.render(heading);
// to render multiple elements we two ways
// root.render([heading,paragraph]);
root.render(container);
