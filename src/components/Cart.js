import { useSelector, useDispatch } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cartItems.length) {
    return (
      <div className="p-2 m-2 shadow-lg h-[300px] flex justify-center items-center text-3xl font-bold text-gray-400">
        No Record found, please add items 🛒
      </div>
    );
  }

  return (
    <div className="text-3xl font-bold">
      <span className="flex shadow-md justify-between">
        <div className="p-1 m-2">Cart - {cartItems.length}</div>
        <button
          className="bg-red-300 text-white font-bold p-2 m-2 text-sm rounded"
          onClick={() => handleClearCart()}
        >
          🛒 Clear cart
        </button>
      </span>
      {cartItems.map((item) => (
        <FoodItems {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Cart;
