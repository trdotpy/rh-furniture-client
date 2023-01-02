import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-[#FFFFF]">
      <section className="mx-auto max-w-screen-xl space-y-4 overflow-hidden p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-2 ">
          <div className="flex justify-center ">
            <a href="/">
              <h1 className="text-2xl font-semibold tracking-tight text-black">
                R+H
              </h1>
            </a>
          </div>

          <nav className="-my-1 flex flex-wrap justify-center space-x-6">
            <p>
              <a
                href="/support"
                className="text-sm uppercase text-gray-800 hover:underline"
              >
                FAQ
              </a>
            </p>
            <p>
              {" "}
              <a
                href="/support"
                className="text-sm uppercase text-gray-800 hover:underline"
              >
                Returns
              </a>
            </p>
            <p>
              <a
                href="/support"
                className="text-sm uppercase text-gray-800 hover:underline"
              >
                Support
              </a>
            </p>
            <p>
              <a
                href="/support"
                className="text-sm uppercase text-gray-800 hover:underline"
              >
                Terms
              </a>
            </p>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-800">
            - By{" "}
            <a href="https://github.com/trdotpy">
              <span className="cursor-pointer font-medium hover:underline">
                Tanvi Rahman
              </span>
            </a>
          </p>

          <div className="flex justify-center space-x-6">
            <p className="text-gray-800">
              <ImFacebook size={15} />
            </p>
            <p className="text-gray-800">
              <ImTwitter size={15} />
            </p>
            <p className="text-gray-800">
              <ImInstagram size={15} />
            </p>
            <a
              href="https://github.com/trdotpy"
              className="text-red-500 hover:text-red-200"
            >
              <ImGithub size={15} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
