import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
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
    <header className="flex items-center justify-between space-x-4 bg-gray-100 py-4 px-40">
      {/* Logo */}
      <div>
        <a href="/">
          <h1 className="text-4xl tracking-tight text-black">R+H</h1>
        </a>
      </div>

      <nav>
        <div className="flex items-center justify-center">
          <div className="hidden md:block">
            <div className="mr-4 flex space-x-12">
              <Link to="/">
                <p className="text-md cursor-pointer font-light uppercase underline-offset-8 hover:underline">
                  Home
                </p>
              </Link>

              <Link to="/products">
                <p className="text-md cursor-pointer font-light uppercase underline-offset-8 hover:underline">
                  Products
                </p>
              </Link>

              <Link to="/support">
                <p className="text-md cursor-pointer font-light uppercase underline-offset-8 hover:underline">
                  Support
                </p>
              </Link>

              {/* <Link to="/support">
                <p className="text-md cursor-pointer font-light uppercase underline-offset-8 hover:underline">
                  FAQ
                </p>
              </Link> */}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Link to="/cart">
              {/* CART */}
              <div className="relative inline-flex items-center rounded px-3 py-1.5 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {productCount > 0 && (
                  <span className="absolute bottom-0 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 font-bold text-white">
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
              <MobileMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
