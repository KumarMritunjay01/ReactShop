import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
function CartPage() {
  const { cartItem, loading, error } = useSelector((state) => state.cartItem);

  useEffect(() => {}, [cartItem]);
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {loading && <p className="text-blue-500">Loading....</p>}
      {error && <p className="text-red-500">{error}</p>}

      {cartItem.length === 0 && <p>No items...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItem.map((item) => (
          <div
            key={item.id}
            className="border-2 border-blue-400 m-2 w-72 h-[480px] flex flex-col justify-between p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-center mb-2">
              {item.title.slice(0, 30)}...
            </h3>

            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4"
            />

            <p className="mb-2">
              <b>Price:</b> ₹{item.price}
            </p>

            <p className="mb-2">
              <b>Rating:</b> {item.rating.rate} ({item.rating.count})
            </p>

            <div className="flex mt-4 w-full">
              <button
                className="w-1/2 border border-black h-10 hover:bg-gray-100"
                onClick={() => removeItemHandler(item.id)}
              >
                Remove
              </button>
              <button className="w-1/2 h-10 bg-amber-300 hover:bg-amber-400">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
