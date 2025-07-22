import React from "react";

function SearchAndFilter() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Products , Brands and More..."
        className="border-1 border-black border-solid rounded-sm p-1 w-1/3 h-10 m-6 ml-40"
      />
      <select className="w-1/3 border-1 border-black border-solid rounded-sm p-1  h-10">
        <option>Filter by category </option>
        <option>Men's Clothing</option>
        <option>Women's Clothing</option>
        <option>Jewelery</option>
        <option>Electronics</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
