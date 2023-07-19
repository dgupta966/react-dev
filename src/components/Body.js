import RestaurantsCard from "./RestaurantsCard";
import { restaurantData } from "./constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  };

  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchInput?.toLowerCase())
    );
    return filterData;
  };

  // not render component (Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>not found</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants?.map((item) => (
            <RestaurantsCard key={item.data.id} {...item.data} />
          ))
        ) : (
          <h1>
            <h1>No restaurant found</h1>
          </h1>
        )}
      </div>
    </>
  );
};

export default Body;
