import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addTodoCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { cartItem } = useSelector((state) => state.cartItem);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartHandler = (product) => {
    dispatch(addTodoCart(product));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {loading && <p className="text-blue-500">Loading....</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 border-blue-400 m-2 max-w-65 max-h-100 flex flex-col justify-between p-4 rounded-lg shadow-md"
          >
            <Link to={`/product-detail/${product.id}`}>
              <div className="flex justify-center flex-col items-center">
                <div className="w-28  object-contain mb-4   border-0.5 border-yellow-50 border-solid rounded-sm p-2 border-y-indigo-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg "
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">
                  {product.title.slice(0, 20)}...
                </h3>
                <p className="mb-2">
                  <b>Price:</b> ${product.price}
                </p>
              </div>
            </Link>

            <div className="flex mt-4 w-full">
              <button
                className="w-1/2 border border-black h-10 hover:bg-gray-100 rounded-lg"
                onClick={() => addToCartHandler(product)}
              >
                {cartItem.some((item) => item.id === product.id)
                  ? "Go to cart"
                  : "Add to cart"}
              </button>
              <button className="w-1/2 h-10 bg-amber-300 hover:bg-amber-400 ml-2 rounded-lg">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
