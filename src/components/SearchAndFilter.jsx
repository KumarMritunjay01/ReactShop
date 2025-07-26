import React from "react";

function SearchAndFilter({
  searchText,
  setSearchText,
  selectCategory,
  setSelectCategory,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 py-4 bg-white dark:text-white rounded-md shadow">
      <input
        type="text"
        placeholder="Search Products With Name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-10 px-4 py-2 border border-black  dark:border-white rounded-md bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:scale-102"
      />
      <select
        className="w-full h-10 px-4 py-2 border border-black dark:border-white rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:scale-102 cursor-pointer"
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
