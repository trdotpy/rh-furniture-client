import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import CustomerService from "./pages/CustomerService";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import CheckoutSuccess from "./pages/CheckoutSuccess";

export default function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmed" element={<CheckoutSuccess />} />
        <Route path="/support" element={<CustomerService />} />
      </Routes>
      <Footer />
    </>
  );
}
