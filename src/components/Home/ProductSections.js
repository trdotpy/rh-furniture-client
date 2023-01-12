import React from "react";
import { Link } from "react-router-dom";

export default function ProductSections() {
  return (
    <div className="mx-auto">
      <div className="grid gap-4 rounded-xl bg-gray-100 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative w-full rounded sm:col-span-2 sm:row-span-2">
          <Link to="/products">
            <img
              src="https://cb2.scene7.com/is/image/CB2/123120_super_furniture_bestsellers?wid=1000&qlt=50"
              alt="best sellers"
              className="rounded-xl bg-no-repeat brightness-75 hover:brightness-50"
            />
            <h1 className="absolute bottom-0 left-0 p-4 text-2xl font-bold uppercase text-gray-100 sm:text-4xl">
              Best Sellers
            </h1>
          </Link>
        </div>
        <div className="relative w-full rounded">
          <Link to="/products">
            <img
              src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_livingRoom?wid=1000&qlt=50"
              alt="products"
              className="rounded-xl brightness-75 hover:brightness-50"
            />
            <div className="absolute bottom-0 left-0 p-4 text-2xl font-bold uppercase text-gray-100">
              Sofas
            </div>
          </Link>
        </div>

        <div className="relative w-full rounded">
          <Link to="/products">
            <img
              src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_bedroom?wid=1000&qlt=50"
              alt="products"
              className="rounded-xl brightness-75 hover:brightness-50"
            />
            <div className="absolute bottom-0 left-0 p-4 text-2xl font-bold uppercase text-gray-100">
              Bed
            </div>
          </Link>
        </div>

        <div className="relative w-full rounded">
          <Link to="/products">
            <img
              src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_storageMedia?wid=1000&qlt=50"
              alt="products"
              className="rounded-xl brightness-75 hover:brightness-50"
            />
            <div className="absolute bottom-0 left-0 p-4 text-2xl font-bold uppercase text-gray-100">
              Storage
            </div>
          </Link>
        </div>

        <div className="relative w-full rounded">
          <Link to="/products">
            <img
              src="https://cb2.scene7.com/is/image/CB2/090122_super_furniture_office?wid=1000&qlt=50"
              alt="products"
              className="rounded-xl brightness-75 hover:brightness-50"
            />
            <div className="absolute bottom-0 left-0 p-4 text-2xl font-bold uppercase text-gray-100">
              Lighting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
