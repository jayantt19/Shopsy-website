import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");

  return savedCart ? JSON.parse(savedCart) : [];
});

  const addToCart = (product) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Number(item.quantity) + Number(product.quantity),
            }
          : item
      );
    }

    return [...prevCart, product];
  });
};

const increaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1
              ? item.quantity - 1
              : 1,
          }
        : item
    )
  );
};

const removeFromCart = (id) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.id !== id)
  );
};

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
         increaseQuantity,
         decreaseQuantity,
         removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;