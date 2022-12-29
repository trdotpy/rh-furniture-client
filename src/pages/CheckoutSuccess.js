import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-col space-y-6 text-center">
          <h1 className="text-xl font-bold uppercase text-gray-900 sm:text-2xl">
            Order #{Math.floor(Math.random() * 10000)} Confirmed 🎉
          </h1>
          <p className="">
            We appreciate your business! If you have any questions, feel free to{" "}
            {""}
            <a
              href="mailto:tanvi.rahman@outlook.com.com"
              className="text-purple-400 underline"
            >
              email us
            </a>
            .
          </p>
        </header>
      </div>
    </div>
  );
}
