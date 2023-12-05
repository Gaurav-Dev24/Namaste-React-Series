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

const restaurantData = [
{
  id: 1,
  name : "Burger King",
  image: "https://images.unsplash.com/photo-1664232802830-592394491fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlciUyMGRpc2h8ZW58MHx8MHx8fDA%3D",
  cuisines: ["Burger","American"],
  rating: "4.2"
},
{
  id: 2,
  name : "KFC",
  image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Chicken","American"],
  rating: "4.5"
},
{
  id: 3,
  name : "Uncle Ji Kitchen",
  image: "https://images.pexels.com/photos/8819258/pexels-photo-8819258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cuisines: ["Paneer","Indian"],
  rating: "4.0"
},
{
  id: 4,
  name : "Dominozz",
  image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Pizza","Italian"],
  rating: "4.4"
},
{
  id: 5,
  name : "Pizzahut",
  image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Pizza","Mexican"],
  rating: "4.3"
},
{
  id: 6,
  name : "WOW",
  image: "https://images.pexels.com/photos/18803177/pexels-photo-18803177/free-photo-of-plate-with-greasy-momos-dumplings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  cuisines: ["Momos","Japanese"],
  rating: "4.0"
},
{
  id: 7,
  name : "WTF",
  image: "https://plus.unsplash.com/premium_photo-1669150852127-2435412047f2?q=80&w=1417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Burger","Indian"],
  rating: "4.1"
},
{
  id: 8,
  name : "Kaveri restaurants",
  image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Masala Dosa","South Indian"],
  rating: "4.5"
},
{
  id: 9,
  name : "MC Donald's",
  image: "https://plus.unsplash.com/premium_photo-1683657860170-900d6cbceffe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cuisines: ["Burger","American"],
  rating: "4.4"
}]

// Config Driven UI
// receiving reastaurantList props 
// instead of props we can also write like {restaurant}

const RestaurantCard = ({restaurant}) => {

  
  // now we can also destructure the restaurant like below
  const {name,image,rating,cuisines} = restaurant;

  return (
    // Static way to call data
    // <div className="card">
    //   <img src="https://images.unsplash.com/photo-1664232802830-592394491fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlciUyMGRpc2h8ZW58MHx8MHx8fDA%3D" alt="card-img" />
    //   <h2>Burger King</h2>
    //   <h3>Burger, American</h3>
    //   <h4>4.2 Stars Rating</h4>
    // </div>

    // Dynamically calling data with some mock objects or apis

    // calling props traditionally
    // <div className="card">
    //   <img src={props.restaurant.image} alt="card-img" />
    //   <h2>{props.restaurant.name}</h2>
    //   <h3>{props.restaurant.cuisines.join(", ")}</h3>
    //   <h4>{props.restaurant.rating} stars</h4>
    // </div>

    // destructuring the props like const RestaurantCard = ({restaurant}) => {}
    // If we will destructure like above code then we can directly call like below
    // <div className="card">
    //   <img src={restaurant.image} alt="card-img" />
    //   <h2>{restaurant.name}</h2>
    //   <h3>{restaurant.cuisines.join(", ")}</h3>
    //   <h4>{restaurant.rating} stars</h4>
    // </div>

    
  
  // const RestaurantCard = ({restaurant}) => {
  // now we can also destructure the restaurant like below
  // const {name,image,rating,cuisines} = restaurant;


// If we will destructure like above code then we can directly call like below
    <div className="card">
      <img src={image} alt="card-img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
}
// passing reastaurantList props
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantData.map((restaurant) => {
        return <RestaurantCard restaurant = {restaurant} key={restaurant.id}/>
      })}

      {/* // here we can also use spread operator like below but when we will pass props in the child component i.e, RestaurantCard then the syntax will be like below
        // const RestaurantCard = ({name,cuisines,rating,image}) => {}
        // return <RestaurantCard restaurant = {...restaurant}/> */}
      
      {/* <RestaurantCard restaurant = {restaurantData[0]}/>
      <RestaurantCard restaurant = {restaurantData[1]}/>
      <RestaurantCard restaurant = {restaurantData[2]}/>
      <RestaurantCard restaurant = {restaurantData[3]}/>
      <RestaurantCard restaurant = {restaurantData[4]}/>
      <RestaurantCard restaurant = {restaurantData[5]}/>
      <RestaurantCard restaurant = {restaurantData[6]}/>
      <RestaurantCard restaurant = {restaurantData[7]}/>
      <RestaurantCard restaurant = {restaurantData[8]}/> */}
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
