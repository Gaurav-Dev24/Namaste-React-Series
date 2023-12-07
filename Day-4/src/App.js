import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import * as XYZ from "./components/Header";

const AppLayout = () => {
  return (
    // React.Fragment is used to reduce the number of DOM nodes
    // <React.Fragment></React.Fragment>, <></>
    <>
      {/* <XYZ.Header /> */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
