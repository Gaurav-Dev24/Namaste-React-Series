import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// passing reastaurantList props like {...restaurant}
const Body = () => {
  // Normal JS variable
  // const searchText = "KFC";

  // React Local State Variable with defualt value "KFC"
  // searchText is local state variable
  const [serachInput, setSearchInput] = useState("KFC"); //to create state variable
  // useState returns an array [variable,function to update the variable]
  return (
    <>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={serachInput}
          onChange={(e) => {
            // e.target.value => whatever we will write in input tag
            setSearchInput(e.target.value)
          }}
        />
      <button className="search-btn">Search</button>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          // return <RestaurantCard restaurant = {restaurant} key={restaurant.id}/>
          return <RestaurantCard {...restaurant} key={restaurant.id} />;
        })}

        {/* // here we can also use spread operator like below but when we will pass props in the child component i.e, RestaurantCard then the syntax will be like below
          // const RestaurantCard = ({name,cuisines,rating,image}) => {}
          // return <RestaurantCard {...restaurant} key={restaurant.id}/> */}

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
    </>
  );
};

export default Body;
