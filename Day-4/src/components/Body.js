import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData (serachInput, restaurants){
  // return restaurants.filter((restaurant) => restaurant.name.includes(serachInput));
const filterData = restaurants.filter((restaurant) => 
restaurant.name.includes(serachInput)
);
return filterData;
}
// passing reastaurantList props like {...restaurant}
const Body = () => {
  // Normal JS variable
  // const searchText = "KFC";

  // useState returns an array [variable,function to update the variable]
  // React Local State Variable with defualt value "KFC"
  // searchText is local state variable
  const [serachInput, setSearchInput] = useState(""); //to create state variable
  const[restaurants, setRestaurants] = useState(restaurantList);

  // useEffect(() => {
  //   console.log("useEffect");
  // },[]) //-->It will be called after initial render only once because the dependency array is empty
  // useEffect(() => {
  //   console.log("useEffect");
  // },[serachInput]) //-->It will be called every time the value of search input state variable changes.
  // useEffect(() => {
  //   // API call
  // },[]) //-->To call an api once after initial render

  useEffect(()=>{
    getRestaurants()
  },[])

async function getRestaurants(){
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929");
  const json = await data.json();
  console.log(json)
  setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
}
  
  // const [searchClicked, setSearchClicked] = useState("false");
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
            setSearchInput(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        {/* Here we don't have to pass "e" as parameter to onclick function because I don't want to read the value of serachClicked */}
        <button
          className="search-btn"
          onClick={() => {
            // NORMAL IF CONDITION
            // if (searchClicked === "true") {
            //   setSearchClicked("false");
            // } else {
            //   setSearchClicked("true");
            // }
            // USING TERNARY OPERATOR
            // searchClicked === "true" ? setSearchClicked("false") : setSearchClicked("true")

            // need to filter the data
            // update the state - restaurants
            const data = filterData(serachInput, restaurants);
            serachInput === "" ? setRestaurants(restaurantList) : setRestaurants(data);
            // setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
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
