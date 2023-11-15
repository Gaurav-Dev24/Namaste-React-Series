import React from "react";
import ReactDOM from "react-dom/client"; // note always use "react-dom/client" to import ReactDOM

// const heading = React.createElement(
//   "h1",
//   { className: "title", key: "h1" }, // specifying key for multiple child elements in container
//   "Namaste React"
// );

// const paragraph = React.createElement(
//   "p",
//   { className: "description", key: "p" }, // specifying key for multiple child elements in container
//   "Hello this is paragraph"
// );



// JSX and React Element--> Creating elements using JSX an alternative to React.createElement
const heading2 = (
  <h2 id="title" key="h2">
    Namaste Heading Two
  </h2>
); //--> JSX expression

// Components
// If we want to write multiple lines of code in components then we have to use () brackets to wrap them up.
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is multiple element rendering in a component.</h2>
    </div>
  );
};

// We can also remove return keyword and write the code like below,
const HeaderComponent2 = () =>  (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is multiple element rendering in a component.</h2>
    </div>
  );

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   paragraph,
//   heading2,
// ]); // if we have multiple childs for an element we have to give them a unique key which can be anything


// //   use correct dom function to call class or id
const root = ReactDOM.createRoot(document.getElementById("root"));
// //   to render single element we use the below code and render() takes only one argument
// //   root.render(heading);
// // to render multiple elements we have two ways
// // root.render([heading,paragraph]);
// root.render(container); // we will use this code if we have to render react elements.

root.render(<HeaderComponent/>); // we will use this code if we have to render react components.