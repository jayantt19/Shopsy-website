import React from 'react';
import "./ProductCard.css"
import {Link} from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <Link className='link' to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title}/>
          <h3>{product.title}</h3>
          <p className='price'>${product.price}</p>
          <p>{product.category}</p>
        </Link>
        <button className='cart-btn'>Add to cart</button>
      </div>
    </>
  );
}

export default ProductCard;
