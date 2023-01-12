import React from "react";
import { Link } from "react-router-dom";
import ProductGrid from "./ProductGrid";

export default function Hero() {
  return (
    <div className="relative hidden h-[1000px] items-center rounded-xl bg-gray-100 text-black lg:flex lg:space-y-32 lg:px-20">
      <section className="absolute top-0 flex w-full flex-col space-y-4 py-32 md:w-9/12 xl:w-8/12">
        <div>
          <span className="text-xl font-bold uppercase tracking-wider">
            Sale
          </span>
          <h1 className="text-3xl font-bold text-pink-500 lg:text-6xl">
            R+H
            <br />& YOU
          </h1>
        </div>

        <div>
          <p className="mb-2 text-2xl font-bold">
            Elevate your space with our modern furniture designs.
          </p>
          <p className="text-xl">
            Bring new life to your home with our unique and trendy furniture.
          </p>
        </div>
      </section>

      <section className="absolute left-0 bottom-0 w-full p-6 lg:p-20">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">New</h1>
            <span>Shop the latest interior design trends.</span>
          </div>
        </div>
        <ProductGrid />
      </section>

      <section className="absolute right-0 bottom-0">
        <Link to="/products">
          <button className="flex gap-2 rounded-xl bg-gray-800 px-6 py-3 font-bold text-gray-100 transition duration-700 hover:bg-gray-400">
            Shop Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>

        <p className="ml-4"></p>
      </section>
    </div>
  );
}
