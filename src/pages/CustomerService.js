import React from "react";

export default function CustomerService() {
  return (
    <div className="mx-auto bg-gray-100 px-40 py-8">
      <h1 className="mb-4 text-4xl font-semibold text-gray-800">
        Customer Service
      </h1>
      <div className="grid grid-cols-1 gap-40 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Frequently Asked Questions
          </h2>
          <ul className="list-none">
            <li className="py-2">
              <span className="text-blue-600 hover:underline">
                How do I place an order on your website?
              </span>
              <p className="text-sm">
                {" "}
                To place an order on our website, add the items you wish to
                purchase to your shopping cart by clicking the "Add to Cart"
                button on the product page. Review the items in your shopping
                cart by clicking the "Cart" button in the top right corner of
                the page. Click the "Proceed to Checkout" button. Fill in your
                billing and shipping information on the checkout page. Select
                your preferred payment method and enter your payment details.
                Review your order and confirm to complete your purchase.
              </p>
            </li>
            <li className="py-2">
              <span className="text-blue-600 hover:underline">
                How do I customer service?
              </span>
              <p className="text-sm">
                You can contact our customer service team by filling out the
                Contact Us form on our website or by sending us an email. Our
                customer service team is available Monday through Friday, 9am to
                5pm EST.
              </p>
            </li>
            <li className="py-2">
              <span className="text-blue-600 hover:underline">
                Do you offer international shipping?
              </span>
              <p className="text-sm">
                Yes, we offer international shipping to select countries. The
                availability of international shipping and the associated fees
                will be displayed during the checkout process.
              </p>
            </li>
            <li className="py-2">
              <span className="text-blue-600 hover:underline">
                Do you offer gift wrapping?
              </span>
              <p className="text-sm">
                Yes, we offer gift wrapping for a small additional fee. To add
                gift wrapping to your order, please select the "Gift Wrap"
                option during the checkout process.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="text-sm">
            If you have any questions or concerns, please don't hesitate to
            reach out to us. You can contact us using the form below or by
            emailing us at{" "}
            <a
              href="mailto:customercare@ecommerce.com"
              className="text-blue-600 hover:underline"
            >
              customercare@ecommerce.com
            </a>
            .
          </p>
          <form
            className="w-full max-w-lg"
            method="POST"
            action="/customer-service"
          >
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-subject"
                >
                  Subject
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
            </div>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-message"
                >
                  Message
                </label>
                <textarea
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  name="message"
                  id="message"
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-indigo-600 py-2 px-4 font-bold text-white hover:bg-indigo-500 focus:outline-none"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
