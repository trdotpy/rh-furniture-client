import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../app/features/CartSlice";
import Spinner from "./Spinner";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [moreProducts, setMoreProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(
        `https://rh-furniture-api.onrender.com/products/${id}`
      );
      setProducts([result.data]);
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  // Fetch more products
  useEffect(() => {
    const fetchMoreProducts = async () => {
      try {
        const result = await axios(
          "https://rh-furniture-api.onrender.com/products"
        );
        setMoreProducts(result.data.filter((product) => product._id !== id));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoreProducts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto bg-white py-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mx-auto h-full w-full object-cover"
            />
          </div>

          <div className="w-full flex-1 space-y-4 px-4 md:w-1/2">
            <h1 className="pt-2 text-3xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-600"> {product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-black">
                ${product.price}
              </span>
              <button
                className="rounded-sm bg-[#d4b27e] py-2 px-4 text-sm font-semibold uppercase text-white hover:brightness-110"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* More Products */}
          <div className="mt-20">
            <h2 className="mb-4 text-xl font-semibold">Explore</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moreProducts.slice(0, 3).map((product) => (
                <div key={product.id} className="relative shadow-md">
                  <Link to={`/products/${product._id}`}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="mx-auto h-64 w-full object-cover"
                    />
                  </Link>

                  <div className="p-4">
                    <Link to={`/products/${product._id}`}>
                      <h3 className="mb-2 cursor-pointer text-sm font-bold hover:underline">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-black">
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
              ))}
            </div>
          </div>
          {/*  */}
        </div>
      ))}
    </div>
  );
}
