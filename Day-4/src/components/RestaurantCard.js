// Config Driven UI
// import { IMG_CDN_URL } from "./config";
// receiving reastaurantList props
// we can use props like const RestaurantCard = (props) => { return()}
// instead of props we can also write like {restaurant}
// const RestaurantCard = ({restaurant}) => {


const RestaurantCard = ({ 
    name, 
    cuisines, 
    rating, 
    image 
  }) => {
    // now we can also destructure the restaurant like below
    // const {name,image,rating,cuisines} = restaurant;
  
    return (
      // Static way to call data
      // <div className="card">
      //   <img src={IMG_CDN_URL} alt="card-img" />
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
  };

  export default RestaurantCard;