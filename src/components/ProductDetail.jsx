import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTodoCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { use } from "react";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  const product = products.find((item) => item.id === Number(id));
  // const isInCart = products.some((item) => item.id === Number(id)); // ✅ Correct condition
  const dispatch = useDispatch();

  if (!product) {
    return <p className="text-red-500 text-center mt-10">Product not found</p>;
  }

  const addToCartHandler = (product) => {
    dispatch(addTodoCart(product));
    console.log(product);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white p-6 rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-700 text-sm">
            <b>Description :</b> {product.description}
          </p>
          <p className="text-sm text-blue-500 ">
            <b>Category :</b> {product.category}
          </p>

          <div className="flex gap-4 items-center mt-4">
            <p className="text-xl font-semibold text-green-600">
              ₹{product.price}
            </p>
            <p className="text-gray-500">
              ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
            </p>
          </div>

          {/* {!isInCart && (
            <button
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
          )}

          {isInCart && (
            <p className="text-green-600 font-semibold mt-6">Already in cart</p>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
