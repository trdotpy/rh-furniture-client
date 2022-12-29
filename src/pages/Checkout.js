// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

// export default function Checkout() {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.cart);

//   const totalPrice = products.cart.reduce(
//     (a, c) => a + c.quantity * c.price,
//     0
//   );

//   async function handleSubmit(event) {
//     event.preventDefault(); // prevent the form from reloading the page

//     const firstName = event.target.FirstName.value;
//     const lastName = event.target.LastName.value;
//     const email = event.target.Email.value;
//     const address = event.target.Address.value;
//     const city = event.target.City.value;
//     const zip = event.target.Zip.value;
//     const country = event.target.Country.value;
//     const phone = event.target.Phone.value;

//     // Collect the cart data from the products array
//     const cartData = products.cart.map((product) => ({
//       productId: product.id,
//       quantity: product.quantity,
//     }));

//     try {
//       const response = await axios.post("/checkout/payment", {
//         customerData: {
//           firstName,
//           lastName,
//           email,
//           address,
//           city,
//           zip,
//           country,
//           phone,
//         },
//         cartData,
//       });

//       // Success
//     } catch (error) {
//       // Failed
//     }
//   }

//   return (
//     <section>
//       <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
//         {products?.cart?.map((product) => (
//           <div key={product.id} className="py-12 md:py-24">
//             <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
//               <div className="flex items-center">
//                 <img
//                   src="https://res.cloudinary.com/drij60fru/image/upload/v1672036586/logo-black_2_tq8lay.png"
//                   alt=""
//                   className="h-10 w-10"
//                 />
//                 <h2 className="ml-4 font-medium text-gray-900">
//                   Real Home Furniture
//                 </h2>
//               </div>

//               <div>
//                 <div className="-my-4 divide-y divide-gray-100">
//                   <div className="flex items-center py-4">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.name}
//                       className="h-32 w-40 object-cover"
//                     />

//                     <div className="ml-4 flex-1 space-y-2">
//                       <h3 className="text-gray-900">{product.name}</h3>
//                       <h3 className="text-gray-900">${product.price}</h3>
//                       <h3 className="text-sm text-gray-900">
//                         Quantity: {product.quantity}x
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Subtotal/Shipping/ */}
//                 <div className="text-md grid grid-cols-2 items-center py-4">
//                   <div className="space-y-2">
//                     <p>Shipping</p>
//                     <p>Taxes</p>
//                     <p className="font-bold">Total</p>
//                   </div>
//                   <div className="space-y-2">
//                     <p>To be determined</p>
//                     <p>Calculated at next step</p>
//                     <p className="font-bold">${totalPrice.toFixed(2)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Form */}
//         <div className="bg-white py-12 md:py-24">
//           <div className="mx-auto max-w-lg px-4 lg:px-8">
//             <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
//               <div className="col-span-3">
//                 <label
//                   for="FirstName"
//                   className="block text-xs font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>

//                 <input
//                   type="text"
//                   id="FirstName"
//                   className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                 />
//               </div>

//               <div className="col-span-3">
//                 <label
//                   for="LastName"
//                   className="block text-xs font-medium text-gray-700"
//                 >
//                   Last Name
//                 </label>

//                 <input
//                   type="text"
//                   id="LastName"
//                   className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                 />
//               </div>

//               <div className="col-span-6">
//                 <label
//                   for="Email"
//                   className="block text-xs font-medium text-gray-700"
//                 >
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   id="Email"
//                   className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                 />
//               </div>

//               <div className="col-span-6">
//                 <label
//                   for="Phone"
//                   className="block text-xs font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="Phone"
//                   className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                 />
//               </div>

//               <div className="col-span-6">
//                 <div className="block text-sm font-medium text-gray-700">
//                   Card Details
//                 </div>

//                 <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
//                   <div>
//                     <label for="CardNumber" className="sr-only">
//                       {" "}
//                       Card Number{" "}
//                     </label>

//                     <input
//                       type="text"
//                       id="CardNumber"
//                       placeholder="Card Number"
//                       className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
//                     />
//                   </div>

//                   <div className="flex -space-x-px">
//                     <div className="flex-1">
//                       <label for="CardExpiry" className="sr-only">
//                         {" "}
//                         Card Expiry{" "}
//                       </label>

//                       <input
//                         type="text"
//                         id="CardExpiry"
//                         placeholder="Expiry Date"
//                         className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
//                       />
//                     </div>

//                     <div className="flex-1">
//                       <label for="CardCVC" className="sr-only">
//                         {" "}
//                         Card CVC{" "}
//                       </label>

//                       <input
//                         type="text"
//                         id="CardCVC"
//                         placeholder="CVC"
//                         className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-6">
//                 <div className="block text-sm font-medium text-gray-700">
//                   Billing Address
//                 </div>

//                 <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
//                   <div>
//                     <label for="Country" className="sr-only">
//                       Country
//                     </label>

//                     <select
//                       id="Country"
//                       className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
//                     >
//                       <option>United States</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="sr-only" for="PostalCode">
//                       {" "}
//                       Zip Code{" "}
//                     </label>

//                     <input
//                       type="text"
//                       id="ZipCode"
//                       placeholder="Zip Code"
//                       className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-6">
//                 <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
//                   Pay Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
