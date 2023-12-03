import React from "react";
import ReactDOM  from "react-dom/client";

const HeaderComponent = () => {
    <div id="header">
        <h1>Food Villa</h1>
        <p>This is food villa app</p>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)