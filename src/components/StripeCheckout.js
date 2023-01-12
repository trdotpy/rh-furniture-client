import React from "react";

export default function StripeCheckout({ products }) {
  return (
    <form
      action="https://rh-furniture-api.onrender.com/create-checkout-session"
      method="POST"
    >
      <input type="hidden" name="products" value={JSON.stringify(products)} />
      <button className="text-md rounded-lg border bg-gray-800 py-2.5 px-5 font-semibold text-gray-100">
        Checkout
      </button>
    </form>
  );
}
