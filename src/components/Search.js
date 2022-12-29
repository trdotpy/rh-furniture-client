import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Search() {
  return (
    <div className="hidden flex-1 justify-center md:flex">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products"
          value={searchInput}
          onChange={handleChange}
          className="w-full rounded-sm border-2 border-gray-100 bg-transparent px-4 py-1 text-sm text-black focus:bg-white focus:text-black focus:outline-none"
        />
      </form>
    </div>
  );
}
