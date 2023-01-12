import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import CustomerService from "./pages/CustomerService";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Home from "./components/Home/Home";
import ProductsList from "./pages/ProductsList";

export default function App() {
  return (
    <div className="h-screen">
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmed" element={<CheckoutSuccess />} />
        <Route path="/support" element={<CustomerService />} />
      </Routes>
      <Footer />
    </div>
  );
}
