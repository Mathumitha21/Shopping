import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";

import { CartProvider } from "./context/CartContext.jsx";
import Explore from "./pages/Explore.jsx";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>

        {isLoggedIn && <Navbar />}

        <Routes>

          
          <Route 
            path="/login" 
            element={<Login setIsLoggedIn={setIsLoggedIn} />} 
          />

          
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/products"
            element={isLoggedIn ? <Products /> : <Navigate to="/login" />}
          />

          <Route
            path="/product/:id"
            element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
          />

          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />

          <Route
            path="/explore"
            element={isLoggedIn ? <Explore /> : <Navigate to="/login" />}
          />


        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
