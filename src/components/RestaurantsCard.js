import { IMG_CDN_URL } from "./constants";
const RestaurantsCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg h-[280]">
      <img
        className="h-32 w-[100%]"
        src={
          cloudinaryImageId
            ? IMG_CDN_URL + cloudinaryImageId
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
        }
        alt=""
      />
      <h2 className="font-bold text-xl truncate p-2">{name}</h2>
      <h4 className="truncate text-sm text-gray-500 p-2 ">
        {cuisines.join(",")}
      </h4>
      <h4 className="p-2">{avgRating} star</h4>
    </div>
  );
};

export default RestaurantsCard;
