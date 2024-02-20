import Cart from "./components/cart/Cart";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";
import { ProductDetails } from "./components/product/ProductDetails";
import { ProductsList } from "./components/productsList/ProductsList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen space-y-8">
      <Header />
      <main className="container grow">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
