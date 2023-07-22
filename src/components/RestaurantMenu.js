import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  console.log(restaurant);

  console.log(id);
  return !restaurant ? (
    <h2>Loading ...</h2>
  ) : (
    <div>
      <h1>Restaurant</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
      <h3>{restaurant?.areaName}</h3>
      <h3>{restaurant?.city}</h3>
      <h3>{restaurant?.avgRating} star</h3>
      <h3>{restaurant?.costForTwoMessage}</h3>
    </div>
  );
};

export default RestaurantMenu;
