import RestaurantsCard from "./RestaurantsCard";
import { restaurantData } from "./constants";
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantData?.map((item) => (
        <RestaurantsCard key={item.data.id} {...item.data} />
      ))}
    </div>
  );
};

export default Body;
