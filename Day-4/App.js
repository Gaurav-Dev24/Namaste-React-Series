import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        src="https://w7.pngwing.com/pngs/351/837/png-transparent-villa-mamas-restaurant-%D9%85%D8%B7%D8%B9%D9%85-%D9%81%D9%8A%D9%84%D8%A7-%D9%85%D8%A7%D9%85%D8%A7%D8%B2%E2%80%8E-logo-sheetal-villa-dgs-group-apartment-cineplex-21-building-text-apartment.png"
        alt="logo"
        className="logo"
      />
    </a>
  );
};

const HeaderComponent = () => {
  // always make sure to use return() while creating react functional component
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
