import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="flex justify-between items-center space-x-10 bg-white
     w-full h-14 text-xl  italic mb-5"
    >
      <div className="ml-20 w-2/3 flex justify-acround items-center">
        <Link to="/" className="mr-16">
          Logo
        </Link>
        <input
          type="text"
          placeholder="Search Products , Brands and More..."
          className="border-1 border-black border-solid rounded-sm p-1 w-lg h-10 "
        />
      </div>
      <div className="mr-20 flex w-1/3 justify-around">
        <Link to="/">All Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="login">Login</Link>
        {/* <Link to="/product-detail"></Link> */}
        {/* <Link to="/product-lists"></Link> */}
      </div>
    </nav>
  );
}
export default Navbar;
