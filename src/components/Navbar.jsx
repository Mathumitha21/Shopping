
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";


function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="navbar">
      
      <h2 className="logo">🛒 Flipkart Lite</h2>

      
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          Cart <span className="cart-badge">{cart.length}</span>
        </Link>
        <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
