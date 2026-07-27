import React from 'react';
import "./ProductCard.css"
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title}/>
        <h3>{product.title}</h3>
        <p className='price'>${product.price}</p>
        <p >{product.category.name}</p>

        <button className='cart-btn'>Add to cart</button>
      </div>
  );
}

export default ProductCard;
