// Simple DOM Element Starts
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Simple DOM Element : Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// Simple DOM Element Ends

// Creating nested dom elements using react and its "createElement Api"
// Let say we want to create following nested dom element using react
{
  /* <div id = "parent">
    <div id = "child">
        <h1>Heading</h1>
    </div>
</div> */
}

// Nested DOM Element Starts
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Nested Dom Element : Hello World from React")
  )
);
// Nested DOM Element Ends

// rendering to the browser using "render() ReactDOM API"
root.render([heading,parent]);