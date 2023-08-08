// import { useState } from "react";
import Cart from "./components/cart/Cart";
import { Header } from "./components/header";
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
        </Routes>
      </div>
    </>
  );
}

export default App;
