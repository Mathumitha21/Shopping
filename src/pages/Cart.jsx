

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart, history, removeFromCart, buyNow } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleBuy = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    buyNow(); // moves items to history and clears cart
    alert("🎉 Product bought successfully!");
  };

  return (
    <div className="cart-container d-flex">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 && <p className="empty">No items added.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img className="cart-img" src={item.image} alt={item.title} />
          <div className="cart-info">
            <h3>{item.title}</h3>
            <p className="cart-price">₹{item.price}</p>
          </div>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="total-price">
          <h3>Total Price: ₹{totalPrice}</h3>
        </div>
      )}

      {cart.length > 0 && (
        <button className="buy-btn" onClick={handleBuy}>
          Buy Now
        </button>
      )}

      {/* Purchase History */}
      {history.length > 0 && (
        <div className="history-section">
          <h2>Purchase History</h2>
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <p>
                {item.title} - ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
