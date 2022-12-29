import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementProduct,
  decrementProduct,
} from "../app/features/CartSlice";
import StripeCheckout from "../components/StripeCheckout";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  if (products.cart.length < 1) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="space-y-2 text-center">
            <h1 className="text-xl font-bold uppercase text-gray-900 sm:text-2xl">
              Your cart is empty.
            </h1>
            <p className="text-sm font-bold uppercase text-gray-900 md:text-base">
              Explore Products
            </p>
          </header>
        </div>
      </div>
    );
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {products?.cart?.map((product) => (
              <ul key={product.id} className="space-y-4">
                <li className="flex items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-28 w-28 rounded object-cover"
                  />

                  <div className="ml-4">
                    <h3 className="text-md text-gray-900">{product.name}</h3>

                    <div className="mt-0.5 space-y-px text-sm text-gray-600">
                      <p>${product.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="flex items-center">
                      <button
                        className="pr-2"
                        onClick={() => dispatch(decrementProduct(product))}
                      >
                        -
                      </button>

                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>

                    <button onClick={() => dispatch(incrementProduct(product))}>
                      +
                    </button>

                    <button
                      className="text-gray-600 transition hover:text-red-600"
                      onClick={() => dispatch(removeFromCart(product))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            ))}

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <div className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between">
                    <p>Taxes</p>
                    <p>Determined at checkout</p>
                  </div>

                  <div className="flex justify-between text-base font-medium">
                    <p>Total</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <StripeCheckout products={products.cart} />

                  {/* <Link to="/checkout">
                  <button className="block rounded bg-gray-700 px-5 py-3 text-sm font-semibold uppercase text-white transition hover:bg-gray-600">
                    Checkout
                  </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
