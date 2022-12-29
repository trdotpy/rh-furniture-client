import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-36"
      style={{
        backgroundImage:
          "url(https://cb2.scene7.com/is/image/CB2/113022_Christmas_dHP?wid=1920&qlt=70&op_sharpen=1)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h3 className="text-4xl font-bold uppercase text-white">Real Home</h3>
          <p className="text-md mt-4 mb-8 font-semibold">
            Shop the latest trends in home decor.
          </p>
          <a href="/products">
            <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore The Collection
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
