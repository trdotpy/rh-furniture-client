import React from "react";
import { Link } from "react-router-dom";

export default function RHBanner() {
  return (
    <div className="group relative block px-8">
      <Link to="/products">
        <img
          src="https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
          alt=""
          className="mx-auto h-[350px] w-full rounded-xl object-cover brightness-75 sm:h-[450px]"
        />

        <div className="absolute inset-0 flex flex-col items-start justify-end space-y-1 px-16 py-10 text-gray-100">
          {/* <p className="text-3xl uppercase md:text-4xl">2023</p> */}
          <h3 className="text-3xl uppercase md:text-4xl">Furniture</h3>
        </div>
      </Link>
    </div>
  );
}
