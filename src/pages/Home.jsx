import ProductList from "../features/products/ProductList";

function Home() {
  return (
    <div>
      <div
        className="mt-4 bg-white w-full h-16 flex justify-center items-center text-black text-xl font-semibold
      "
      >
        <button className="ml-10">Cloths</button>
        <button className="ml-10">jewelery</button>
        <button className="ml-10">electronics</button>
      </div>
      <ProductList />
    </div>
  );
}

export default Home;
