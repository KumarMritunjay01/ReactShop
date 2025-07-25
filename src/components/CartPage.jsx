import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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

  useEffect(() => {
    let price = 0;
    cartItem.map((item) => {
      price += item.count * Math.floor(item.price);
    });
    setTotalPrice(price);
  }, [current.count, current]);
  console.log(cartItem);

  useEffect(() => {}, [cartItem]);
  const dispatch = useDispatch();

  const increaseItemHandler = (id) => {
    dispatch(increaseItemCount(id));
  };

  const decreaseItemHandler = (id) => {
    dispatch(decreseItemCount(id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <hr />
      <div className="flex justify-around h-12 w-full items-center text-xl font-semibold m-1">
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total</h2>
      </div>
      <hr />
      {cartItem.length === 0 && <p>No items...</p>}

      {cartItem.map((item) => (
        <div className="w-full h-full" key={item.id}>
          <div className="w-full flex justify-between min-h-30 items-center ">
            <div className="flex w-1/4 justify-around items-center">
              <img src={item.image} alt={item.title} className="max-w-20" />
              <h3 className="text-lg font-semibold text-center mb-2">
                {item.title.slice(0, 20)}...
              </h3>
            </div>
            <div className="w-1/4 items-center justify-center flex">
              <b>Price: </b> $ {Math.floor(item.price)}
            </div>
            <div className="w-1/4 items-center justify-center flex">
              <div className="flex w-1/4 h-8 justify-around border-1 border-black items-center rounded-sm">
                <button
                  className="text-3xl cursor-pointer"
                  onClick={() => decreaseItemHandler(item.id)}
                  disabled={item.count === 1}
                >
                  -
                </button>
                <div>{item.count}</div>
                <button
                  className="text-xl cursor-pointer"
                  onClick={() => increaseItemHandler(item.id)}
                  disabled={item.count === 5}
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-1/4 items-center justify-center flex">
              $ {Math.floor(Math.floor(item.price) * item.count)}
            </div>
            <hr />
          </div>
          <hr />
        </div>
      ))}

      <div className="w-full h-50 flex justify-end items-end mt-6 ">
        <div className="w-1/4 h-full bg-indigo-100 m-4 p-5 flex flex-col rounded-xl">
          <h1 className="text-xl font-semibold mb-2">Cart Total</h1>
          <hr />
          <div className="h-2/3 flex justify-between items-center text-xl ml-4 mr-4">
            <h3 className="w-1/2">Sub total</h3>
            <p className="flex w-1/2 justify-center">
              $ {Math.floor(totalPrice)}
            </p>
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
