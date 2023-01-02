import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-black">
      <section className="mx-auto max-w-screen-xl space-y-4 overflow-hidden p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-2 ">
          <div className="flex justify-center ">
            <a href="/">
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                R+H
              </h1>
            </a>
          </div>

          <nav className="-my-1 flex flex-wrap justify-center space-x-6">
            <p>
              <a
                href="/support"
                className="text-sm text-gray-300 hover:underline"
              >
                FAQ
              </a>
            </p>
            <p>
              {" "}
              <a
                href="/support"
                className="text-sm text-gray-300 hover:underline"
              >
                Returns
              </a>
            </p>
            <p>
              <a
                href="/support"
                className="text-sm text-gray-300 hover:underline"
              >
                Support
              </a>
            </p>
            <p>
              <a
                href="/support"
                className="text-sm text-gray-300 hover:underline"
              >
                Terms
              </a>
            </p>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-300">
            {" "}
            - By <span className="font-medium ">Tanvi Rahman</span>
          </p>

          <div className="flex justify-center space-x-6">
            <p className="text-gray-400 hover:text-gray-500">
              <ImFacebook size={13} />
            </p>
            <p className="text-gray-400 hover:text-gray-500">
              <ImTwitter size={13} />
            </p>
            <p className="text-gray-400 hover:text-gray-500">
              <ImInstagram size={13} />
            </p>
            <a
              href="https://github.com/trdotpy"
              className="text-red-400 hover:text-red-200"
            >
              <ImGithub size={13} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
