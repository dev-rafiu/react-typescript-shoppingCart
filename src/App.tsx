// import { useState } from "react";
import Cart from "./components/cart/Cart";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";
import { ProductDetails } from "./components/product/ProductDetails";
import { ProductsList } from "./components/productsList/ProductsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
