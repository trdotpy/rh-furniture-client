import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

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
            <div className="flex flex-col space-y-8">
              <div>
                <Link to="/">
                  <button onClick={toggleMenu}>
                    <p className="text-2xl font-semibold">Home</p>
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/products">
                  <button onClick={toggleMenu}>
                    <p className="text-2xl font-semibold">Products</p>
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/support">
                  <button onClick={toggleMenu}>
                    <p className="text-2xl font-semibold">Support</p>
                  </button>
                </Link>
              </div>

              <div>
                <Link to="/support">
                  <button onClick={toggleMenu}>
                    <p className="text-2xl font-semibold">FAQ</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
