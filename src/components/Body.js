import RestaurantsCard from "./RestaurantsCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
// import UserContext from "../utils/userContext";
// import useOnline from "../utils/useOnline";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const { user, setUser } = useContext(UserContext);

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
    const seeAllRestaurants = json.data.cards.filter(
      (item) => item.cardType === "seeAllRestaurants"
    );
    setFilteredRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
    setAllRestaurants(seeAllRestaurants[0]?.data?.data?.cards);
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
      <div className="search-container m-2 p-2 shadow-sm">
        <input
          type="text"
          className="p-2 m-2 focus:bg-green-50 border border-black rounded"
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

        {/* <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        /> */}
      </div>
      <div className="flex flex-wrap justify-center">
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
