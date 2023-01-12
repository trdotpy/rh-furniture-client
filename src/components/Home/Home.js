import React from "react";
import Hero from "./Hero";
import ProductSections from "./ProductSections";

export default function Home() {
  return (
    <div className="bg-gray-100 px-40 py-10">
      <ProductSections />
      <Hero />
    </div>
  );
}
