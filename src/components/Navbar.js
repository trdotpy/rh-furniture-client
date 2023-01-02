import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const productCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between space-x-4 border-b bg-[#FFFFF] py-2 px-10">
      {/* Logo */}
      <div className="flex">
        <a href="/">
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            R+H
          </h1>
        </a>
      </div>

      {/* Search */}
      <div className="hidden flex-1 md:flex">
        <input
          type="text"
          placeholder="Search (Coming soon)"
          className="w-1/3 rounded-sm border-2 border-gray-200 bg-transparent px-4 py-1 text-xs text-black focus:bg-white focus:text-black focus:outline-none"
        />
      </div>

      <nav className="hidden space-y-2 md:block">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4">
            <Link to="/">
              <p className="cursor-pointer text-sm font-semibold uppercase hover:underline">
                Home
              </p>
            </Link>

            <Link to="/products">
              <p className="cursor-pointer text-sm font-semibold uppercase hover:underline">
                Products
              </p>
            </Link>

            <Link to="/support">
              <p className="cursor-pointer text-sm font-semibold uppercase hover:underline">
                Support
              </p>
            </Link>

            <Link to="/support">
              <p className="cursor-pointer text-sm font-semibold uppercase hover:underline">
                FAQ
              </p>
            </Link>
          </div>
        </div>
      </nav>

      <div>
        <Link to="/cart">
          <div className="relative inline-flex items-center rounded border border-gray-200 px-2.5 py-1.5 text-xs font-medium">
            <MdOutlineShoppingBag size={25} />
            {productCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4b27e] font-bold text-white">
                {productCount}
              </span>
            )}
          </div>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center justify-between md:hidden">
        <button className="text-black">
          <FiMenu onClick={toggleMenu} size={20} />
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </button>
      </div>
    </header>
  );
}
