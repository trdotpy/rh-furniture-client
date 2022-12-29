import React from "react";

export default function StripeCheckout({ products }) {
  return (
    <form action="https://rh-furniture-api.onrender.com/create-checkout-session" method="POST">
      <input type="hidden" name="products" value={JSON.stringify(products)} />
      <button className="block rounded bg-[#d4b27e] px-5 py-3 text-sm font-semibold uppercase text-white transition">
        Checkout
      </button>
    </form>
  );
}
