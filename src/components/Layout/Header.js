import React, { useState } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between space-x-4 bg-white py-2 px-12">
      {/* Logo */}
      <div className="flex items-center gap-x-4 md:justify-center">
        <a href="/">
          <h1 className="text-2xl font-semibold tracking-tight text-black">
            RH
          </h1>
        </a>
      </div>

      {/* Search */}
      <div className="hidden flex-1 justify-center md:flex">
        <input
          type="text"
          placeholder="Search products"
          className="w-1/2 rounded-sm border-2 border-gray-100 bg-transparent px-4 py-1 text-sm text-black focus:bg-white focus:text-black focus:outline-none"
        />
      </div>

      {/* Cart */}
      <div className="flex">
        <a href="/cart" className="text-black hover:text-white">
          <MdOutlineShoppingBag size={20} />
        </a>
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
