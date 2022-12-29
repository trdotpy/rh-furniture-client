import React from "react";
import { CgClose } from "react-icons/cg";

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen bg-black bg-opacity-90">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button className="text-white" onClick={toggleMenu}>
              <CgClose size={30} />
            </button>
          </div>
          <div className="m-auto p-4 text-center uppercase text-white">
            <ul className="flex flex-col space-y-8">
              <li className="text-2xl font-semibold">
                <a href="/">Home</a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/products">Products</a>
              </li>
              {/* <li className="text-2xl font-semibold">
                <a href="/account">Account</a>
              </li> */}
              <li className="text-2xl font-semibold">
                <a href="/support">Support</a>
              </li>
              <li className="text-2xl font-semibold">
                <a href="/support">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
