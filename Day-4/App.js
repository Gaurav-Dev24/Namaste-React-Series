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

const Header = () => {
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

const burgerKing = {
  name : "Burger King",
  image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlciUyMGRpc2h8ZW58MHx8MHx8fDA%3D",
  cuisines: ["Burger","American"],
  rating: "4.2"
}

const RestaurantCard = () => {
  return (
    // Static way to call data
    // <div className="card">
    //   <img src="https://images.unsplash.com/photo-1664232802830-592394491fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlciUyMGRpc2h8ZW58MHx8MHx8fDA%3D" alt="card-img" />
    //   <h2>Burger King</h2>
    //   <h3>Burger, American</h3>
    //   <h4>4.2 Stars Rating</h4>
    // </div>

    // Dynamically calling data with some objects or apis
    <div className="card">
      <img src={burgerKing.image} alt="card-img" />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisines.join(", ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
}
const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

// 

const AppLayout = () => {
  return(
    // React.Fragment is used to reduce the number of DOM nodes
    // <React.Fragment></React.Fragment>, <></>
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};


// const styleObj = {
//     backgroundColor: "red",
//   }

// const JSX = () => {
//   return (
//     <>
//     {/* These are the two different way to give styling to react */}
//       <h1 style ={styleObj}>First</h1>
//       <h1 style={{background: "blue"}}>Second</h1>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
