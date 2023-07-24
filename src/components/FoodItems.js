import { IMG_CDN_URL } from "./constants";
const FoodItems = ({ name, description, price, imageId, inStock }) => {
  return (
    <div className="flex justify-center">
      <div className="p-2 m-2 shadow-lg flex justify-between w-[50%]">
        <span>
          <span className="text-sm">{inStock >= 1 ? "🟢" : "🔴"}</span>
          <h1 className="font-bold text-xl">{name}</h1>
          <h2
            name={description}
            className="text-gray-500 text-sm truncate w-56"
            title={description}
          >
            {description}
          </h2>
          <h2 className="text-sm text-gray-500">Price -{price / 100}</h2>
          <button
            className="text-sm bg-green-200 p-1"
            // onClick={() => addFoodItem(i)}
          >
            Remove Item
          </button>
        </span>
        <img
          className="w-24 h-24"
          src={
            imageId
              ? IMG_CDN_URL + imageId
              : "https://www.indifi.com/blog/wp-content/uploads/2019/12/Scaling-Up-The-Outreach-Through-Swiggy-.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default FoodItems;
