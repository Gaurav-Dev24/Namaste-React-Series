// passing reastaurantList props

const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
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
    );
  };

  export default Body;