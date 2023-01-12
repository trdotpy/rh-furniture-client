import React, { useEffect, useState } from "react";
import { addToCart } from "../app/features/CartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Spinner from "./Spinner";
import RHBanner from "../components/RHBanner";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios(
        "https://rh-furniture-api.onrender.com/categories"
      );
      setCategories(result.data);
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-gray-100 px-40">
      <RHBanner />

      {/* Categories */}
      <div className="py-4">
        <div className="flex w-full flex-wrap justify-center space-x-6 py-2 font-medium text-black">
          <button
            className="cursor-pointer rounded-lg bg-gray-600 px-4 py-2 text-gray-100"
            onClick={() => setSelectedCategory("")}
          >
            ALL
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              className="cursor-pointer rounded-lg bg-gray-600 px-4 py-2 uppercase text-gray-100
            	"
              onClick={() => setSelectedCategory(category._id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-3">
        {/* {products.map((product) => ( */}
        {products
          .filter(
            (product) =>
              selectedCategory === "" || product.category === selectedCategory
          )
          .map((product) => (
            <div key={product.id} className="mb-4 w-full px-2">
              <div className="rounded p-6">
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="mx-auto h-52 w-screen rounded-xl object-cover md:h-96"
                  />
                </Link>
                <div className="pt-4">
                  <Link to={`/products/${product._id}`}>
                    <h3 className="mb-2 cursor-pointer text-xl font-bold">
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
                      className="rounded-sm bg-[#d4b27e] py-2 px-4 text-sm font-semibold uppercase text-white hover:brightness-110"
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
