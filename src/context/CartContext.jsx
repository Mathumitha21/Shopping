
// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   function addToCart(product) {
//     setCart([...cart, product]);
//   }

//   function removeFromCart(id) {
//     setCart(cart.filter((item) => item.id !== id));
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }


import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]); // purchase history

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const buyNow = () => {
    if (cart.length === 0) return false;
    setHistory([...history, ...cart]); // add to history
    setCart([]); // clear cart
    return true;
  };

  return (
    <CartContext.Provider
      value={{ cart, history, addToCart, removeFromCart, buyNow }}
    >
      {children}
    </CartContext.Provider>
  );
};
