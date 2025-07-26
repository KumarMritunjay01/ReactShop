import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-blue-950 text-white">
      <div className="sm:ml-20 w-full sm:w-3/5 flex justify-center sm:justify-start items-center text-2xl sm:text-3xl font-semibold mb-3 sm:mb-0">
        <Link
          to="/"
          className="border-2 border-white px-3 py-1 rounded hover:bg-white hover:text-blue-950 transition duration-200"
        >
          ReactShop
        </Link>
      </div>
      <div className="w-full sm:w-2/5 flex justify-center sm:justify-end items-center gap-4 text-base sm:text-xl font-medium text-black">
        <Link
          to="/"
          className="bg-white border border-white px-4 py-1 rounded hover:bg-blue-100 transition duration-200 text-center w-24"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="bg-white border border-white px-4 py-1 rounded hover:bg-blue-100 transition duration-200 text-center w-24"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
