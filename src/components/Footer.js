import React from "react";
import { ImFacebook, ImTwitter, ImGithub, ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-white">
      <section className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a
              href="/support"
              className="text-sm leading-6 text-gray-500 hover:text-gray-900"
            >
              Frequently Asked Questions
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/support"
              className="text-sm leading-6 text-gray-500 hover:text-gray-900"
            >
              Return Policy
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/support"
              className="text-sm leading-6 text-gray-500 hover:text-gray-900"
            >
              Customer Support
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="/support"
              className="text-sm leading-6 text-gray-500 hover:text-gray-900"
            >
              Terms of Service
            </a>
          </div>
        </nav>

        {/* Social */}
        <section className="mt-4 flex justify-center space-x-6">
          <p className="text-gray-400 hover:text-gray-500">
            <ImFacebook size={15} />
          </p>
          <p className="text-gray-400 hover:text-gray-500">
            <ImTwitter size={15} />
          </p>
          <p className="text-gray-400 hover:text-gray-500">
            <ImInstagram size={15} />
          </p>
          <a
            href="https://github.com/trdotpy"
            className="text-red-400 hover:text-red-200"
          >
            <ImGithub size={15} />
          </a>
        </section>
        <p className="mt-4 text-center text-sm leading-6 text-gray-400">
          © 2023 R+H, Inc. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
