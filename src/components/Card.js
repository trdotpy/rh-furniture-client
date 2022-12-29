import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="group relative block">
      <Link to="/products">
        <img
          src="https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
          alt=""
          className="mx-auto h-[350px] w-full rounded-sm object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end space-y-1 bg-black/20 p-6 text-gray-100">
          <h3 className="text-3xl font-bold uppercase tracking-wide md:text-5xl">
            R+H
          </h3>
          <p className="text-3xl font-bold uppercase tracking-wide md:text-5xl">
            2023
          </p>

          {/* <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Shop Now
          </button> */}
        </div>
      </Link>
    </div>
  );
}
