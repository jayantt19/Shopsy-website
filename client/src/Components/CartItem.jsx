import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-image" />

      <div className="cart-details">
        <h3>{item.title}</h3>
        <p className="category">{item.category}</p>
        <h2>${item.price}</h2>

        <div className="quantity-box">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;