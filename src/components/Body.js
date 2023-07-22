import RestaurantsCard from "./RestaurantsCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
// import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // we can use this api in localhost via chrome extension -> Allow CORS: Access-Control-Allow-Origin
    // https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  };

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴 offline, please check your internet connection</h1>;
  // }

  // not render component (Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>not found</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container m-2 p-2 bg-pink-50">
        <input
          type="text"
          className="p-2 m-2 focus:bg-green-100"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-700 text-white rounded-md hover:bg-purple-900"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length !== 0 ? (
          filteredRestaurants?.map((item) => (
            <Link to={"restaurant/" + item.data.id} key={item.data.id}>
              <RestaurantsCard {...item.data} />
            </Link>
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
