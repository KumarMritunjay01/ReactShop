import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { counter } from "@fortawesome/fontawesome-svg-core";

function Navbar() {
  const { cartItem } = useSelector((state) => state.cartItem);
  const countOfItem = cartItem.length; // if cartItem is an array

  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-blue-950 text-white fixed t-0 ">
      <div className="sm:ml-20 w-full sm:w-3/5 flex justify-center sm:justify-start items-center text-2xl sm:text-3xl font-semibold mb-3 sm:mb-0">
        <Link
          to="/"
          className="border-1 border-gray-500 px-3 py-1 rounded light:hover:bg-white light:hover:text-blue-950 transition duration-200 dark:hover:text-3xl"
        >
          ReactShop
        </Link>
      </div>
      <div className="w-full sm:w-2/5 flex justify-center sm:justify-end items-center gap-4 text-base sm:text-xl font-medium text-black">
        <Link
          to="/"
          className="border-1 border-gray-500 text-white  px-4 py-1 rounded  transition duration-200 text-center w-24 dark:hover:text-2xl mr-2"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className=" text-white mr-3 px-4 py-1 rounded transition duration-200 text-center w-24 dark:hover:text-2xl"
        >
          <div className="relative inline-block">
            {/* Cart Icon */}
            <FontAwesomeIcon icon={faCartPlus} size="2x" />

            {/* Count Badge */}
            {countOfItem > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {countOfItem}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
