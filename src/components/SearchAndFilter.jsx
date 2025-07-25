import React from "react";

function SearchAndFilter({
  searchText,
  setSearchText,
  selectCategory,
  setSelectCategory,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Products With Name ...."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border-1 border-black border-solid rounded-sm p-1 w-1/3 h-10 m-6 ml-40"
      />
      <select
        className="w-1/3 border-1 border-black border-solid rounded-sm p-1  h-10"
        value={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
      >
        <option value="" disabled>
          Filter by category
        </option>
        <option value="Men's Clothing">Men's Clothing</option>
        <option value="Women's Clothing">Women's Clothing</option>
        <option value="Jewelery">Jewelery</option>
        <option value="Electronics">Electronics</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
