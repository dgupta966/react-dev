import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantItems, setRestaurantItems] = useState([]);

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

    // need to update this logic due to it is not fot recommended items but it shows all item,
    // may be duplicate also
    const nestedData = json?.data?.cards[2]?.groupedCard?.cardGroupMap[
      "REGULAR"
    ]?.cards
      ?.filter((i) => {
        return i?.card?.card?.itemCards;
      })
      .map((i) => {
        return i?.card?.card?.itemCards?.map((i) => {
          return i?.card?.info;
        });
      })
      .flat(1);
    setRestaurantItems(nestedData);
    console.log(nestedData);
  };

  return [restaurant, restaurantItems];
};

export default useRestaurant;
