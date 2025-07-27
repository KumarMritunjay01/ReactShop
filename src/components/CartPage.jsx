import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  addTodoCart,
  increaseItemCount,
  decreseItemCount,
} from "../features/cart/cartSlice";
import { current } from "@reduxjs/toolkit";
function CartPage() {
  const { cartItem } = useSelector((state) => state.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    cartItem.map((item) => {
      price += item.count * Math.floor(item.price);
    });
    setTotalPrice(price);
  }, [cartItem]);

  const dispatch = useDispatch();

  const increaseItemHandler = (id) => {
    dispatch(increaseItemCount(id));
  };

  const decreaseItemHandler = (id) => {
    const itemInCart = cartItem.filter((item) => item.id === id);
    console.log(itemInCart);
    if (itemInCart.count === 0) {
    } else {
      dispatch(decreseItemCount(id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <hr />
      <div className="flex justify-around h-12 w-full items-center text-xl font-semibold m-4">
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total</h2>
      </div>
      <hr />
      {cartItem.length === 0 && <p>No items...</p>}

      {cartItem.map((item) => (
        <div className="w-full space-y-4" key={item.id}>
          <div className="w-full flex flex-wrap justify-between items-center bg-white shadow-md rounded-xl">
            <div className="flex items-center w-full sm:w-1/4 space-x-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold">
                {item.title.slice(0, 20)}...
              </h3>
            </div>
            <div className="w-full sm:w-1/4 flex justify-center items-center mt-2 sm:mt-0">
              <span className="font-semibold text-gray-700">Price:</span>
              <span className="ml-2 text-black">${Math.floor(item.price)}</span>
            </div>
            <div className="w-full sm:w-1/4 flex justify-center items-center mt-2 sm:mt-0 flex-col">
              <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden shadow-sm">
                <button
                  className="text-2xl px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer clsc"
                  onClick={() => decreaseItemHandler(item.id)}
                  disabled={item.count === 1}
                >
                  -
                </button>
                <div className="px-4 py-1">{item.count}</div>
                <button
                  className="text-2xl px-3 py-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
                  onClick={() => increaseItemHandler(item.id)}
                  disabled={item.count === 5}
                >
                  +
                </button>
              </div>
              <span className="text-sm text-red-500">
                {item.count === 5 ? (
                  <p>Maximum limit crossed (Only 5 allowed)</p>
                ) : null}
              </span>
            </div>

            <div className="w-full sm:w-1/4 flex justify-center items-center mt-2 sm:mt-0 text-lg font-semibold text-indigo-700">
              $ {Math.floor(Math.floor(item.price) * item.count)}
            </div>
            <hr />
          </div>
          <hr />
        </div>
      ))}

      <div className="w-full flex justify-end mt-8">
        <div className="w-full sm:w-1/3 bg-indigo-100 p-6 rounded-2xl shadow-md">
          <h1 className="text-xl font-bold mb-4 text-indigo-800">Cart Total</h1>
          <hr className="mb-4" />
          <div className="flex justify-between text-lg mb-6">
            <span className="font-medium text-gray-700">Subtotal</span>
            <span className="font-semibold text-black">
              ${Math.floor(totalPrice)}
            </span>
          </div>

          <div className="bg-black text-white text-lg font-semibold w-full h-12 rounded-lg flex justify-center items-center cursor-pointer">
            Proceed to Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
