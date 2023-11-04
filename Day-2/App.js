import React from "react";
import ReactDOM from "react-dom/client"; // note always use "react-dom/client" to import ReactDOM

const heading = React.createElement(
  "h1",
  { className: "title" },
  "Namaste React"
);
const paragraph = React.createElement(
  "p",
  { className: "description" },
  "Hello this is paragraph"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  paragraph,
]);
// console.log(heading)
// console.log(paragraph)
//   use correct dom function to call class or id
const root = ReactDOM.createRoot(document.getElementById("root"));
//   to render single element and it takes only one argument
//   root.render(heading);
// to render multiple elements we two ways
// root.render([heading,paragraph]);
root.render(container);
