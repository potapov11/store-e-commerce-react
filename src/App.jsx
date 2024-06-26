import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Form } from "./components/form";
import { Footer } from "./components/footer";
import { ShopContextProvider } from "./context/shop-context";
import React from "react";

function App() {
  return (
    <div className="app">
      <ShopContextProvider>
        <Router>
          <Form />
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
//
