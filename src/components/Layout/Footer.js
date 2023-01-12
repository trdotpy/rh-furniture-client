import React from "react";
import { ImGithub } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] border-t border-gray-300 bg-gray-100">
      <section className="mx-auto max-w-screen-xl space-y-4 overflow-hidden p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center">
            <a href="/">
              <h1 className="text-3xl tracking-tight text-black">R+H</h1>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
            <p>
              <a
                href="/support"
                className="text-md font-light uppercase underline-offset-8 hover:underline"
              >
                FAQ
              </a>
            </p>
            <p>
              {" "}
              <a
                href="/support"
                className="text-md font-light uppercase underline-offset-8 hover:underline"
              >
                Returns
              </a>
            </p>
            <p>
              <a
                href="/support"
                className="text-md font-light uppercase underline-offset-8 hover:underline"
              >
                Support
              </a>
            </p>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/trdotpy" className="hover:text-red-200">
              <ImGithub size={18} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
