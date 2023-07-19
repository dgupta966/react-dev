import RestaurantsCard from "./RestaurantsCard";
import { restaurantData } from "./constants";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [searchInput, setSearchInput] = useState("");

  const filterData = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchInput)
    );
    return filterData;
  };

  return (
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
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants?.map((item) => (
          <RestaurantsCard key={item.data.id} {...item.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
