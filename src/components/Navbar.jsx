import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center space-x-10 bg-blue-950
     w-full h-18  italic mb-5 text-white"
    >
      <div className="ml-20 w-3/5 flex justify-acround items-center text-3xl font-semibold">
        <Link
          to="/"
          className="mr-16 border-2 border-white border-solid p-1.5 rounded-sm "
        >
          ReactShop
        </Link>
      </div>
      <div className="mr-30 flex w-1/5  h-1/2 text-xl font-medium text-black">
        <Link
          to="/"
          className="border-1 border-white border-solid bg-white w-1/3  mr-6 rounded-sm flex justify-center"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="border-1 border-white border-solid bg-white w-1/3 rounded-sm flex justify-center"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
