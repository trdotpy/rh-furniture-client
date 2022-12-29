import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../app/features/CartSlice";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(
        `https://rh-furniture-api.onrender.com/products/${id}`
      );
      setProducts([result.data]);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mx-auto h-full object-cover"
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
                className="rounded-sm bg-[#d4b27e] py-2 px-4 text-sm font-semibold text-white hover:brightness-110"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
