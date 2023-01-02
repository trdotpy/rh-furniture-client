import React, { useEffect, useState } from "react";
import { addToCart } from "../app/features/CartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Card from "../components/Card";
import Spinner from "./Spinner";

export default function Product() {
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios(
          "https://rh-furniture-api.onrender.com/products"
        );
        setProducts(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch all categories
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const result = await axios(
  //       "https://rh-furniture-api.onrender.com/categories"
  //     );
  //     setCategories(result.data);
  //   };

  //   fetchCategories();
  // }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto pt-4">
      <Card />
      {/* Categories */}
      {/* <div className="py-4">
        <div className="flex w-full flex-wrap justify-center space-x-6 py-2 font-medium text-black">
          <div className="cursor-pointer hover:underline">ALL</div>
          {categories.map((category) => (
            <div
              key={category.id}
              className="cursor-pointer uppercase hover:underline"
            >
              {category.name}
            </div>
          ))}
        </div>
      </div> */}

      {/* Products */}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="mb-4 w-full px-2 md:w-1/2">
            <div className="rounded bg-white p-6">
              <Link to={`/products/${product._id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="mx-auto h-52 w-screen rounded-t object-cover md:h-96"
                />
              </Link>
              <div className="pt-4">
                <Link to={`/products/${product._id}`}>
                  <h3 className="mb-2 cursor-pointer text-xl font-bold hover:underline">
                    {product.name}
                  </h3>
                </Link>
                <p className="mb-4 text-sm text-gray-600">
                  {product.description}
                </p>
                <div className="flex items-center justify-end">
                  <span className="mr-2 text-2xl font-bold text-black">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    className="rounded-sm bg-[#d4b27e] py-2 px-4 text-sm font-semibold text-white hover:brightness-110"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
