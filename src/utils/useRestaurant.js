import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    // we can keep this restaurant menu api url in comman area like in constants file
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    console.log(json);
  };

  return restaurant;
};

export default useRestaurant;
