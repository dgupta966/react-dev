import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, restaurantItems] = useRestaurant(id);

  console.log(restaurant);

  console.log(id);
  return !restaurant ? (
    <h2>Loading ...</h2>
  ) : (
    <>
      <div className="m-2 p-2 shadow-lg">
        <h1 className="font-bold text-3xl">Restaurant</h1>
        <h2 className="font-bold text-xl ">{restaurant?.name}</h2>
        <img
          className="w-56 h-52"
          src={
            restaurant?.cloudinaryImageId
              ? IMG_CDN_URL + restaurant?.cloudinaryImageId
              : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          }
          alt=""
        />
        <h3>
          <span className="font-bold">Area - </span> {restaurant?.areaName}
        </h3>
        <h3>
          <span className="font-bold">City - </span>
          {restaurant?.city}
        </h3>
        <h3>
          <span className="font-bold">Rating - </span>
          {restaurant?.avgRating} star
        </h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1 className="text-2xl font-bold m-2 p-2">
          Recommended ({restaurantItems?.length})
        </h1>
        {restaurantItems.map((i, index) => {
          return (
            <div
              className="p-2 m-2 shadow-lg flex justify-between"
              key={i?.id + index}
            >
              <span>
                <span>{i?.inStock >= 1 ? "🟢" : "🔴"}</span>
                <h1 className="font-bold text-xl">{i.name}</h1>
                <h2
                  name={i?.description}
                  className="text-gray-500 truncate text-sm"
                >
                  {i?.description}
                </h2>
                <h2 className="text-sm text-gray-500">
                  Price -{" "}
                  {Boolean(i?.price) ? i?.price / 100 + " Rupees" : "❌"}
                </h2>
              </span>
              <img
                className="w-24 h-24"
                src={
                  i?.imageId
                    ? IMG_CDN_URL + i?.imageId
                    : "https://www.indifi.com/blog/wp-content/uploads/2019/12/Scaling-Up-The-Outreach-Through-Swiggy-.jpg"
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
