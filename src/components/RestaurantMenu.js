import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    console.log(json);
  };
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
