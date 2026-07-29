import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { FaStar,FaRegStar } from "react-icons/fa";
import './ProductDetails.css'
const ProductDetails = () => {
  const [product, setproduct] = useState(null);
  const [quantity, setquantity] = useState(1);
   const {id}=useParams()

   useEffect(() => {
    const fetchProduct=async()=>{
try{
      const response=await fetch(`https://fakestoreapi.com/products/${id}`);
      const data=await response.json();
      setproduct(data);
     }
     catch(err){
      console.log(err);
     }
    }
     fetchProduct();
   }, [id])
   
   if (!product) {
  return <h2>Loading...</h2>;
}
  const filledstars= Math.abs(product.rating.rate);
  return (
    <div className='product-details'>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>

        <div className="ratings">
           <span className='rate'>{product.rating?.rate}</span>
          {[...Array(5)].map((_,index)=>index<filledstars?(<FaStar className='star' key={index}/>):(
      <FaRegStar className='empstar' key={index} />
    ))}

          <span className='count'>({product.rating?.count} reviews)</span>
        </div>

        <p className='category'>{product.category}</p>
        <h2>${product.price}</h2>
        <p className='description'>{product.description}</p>
        <div className="quan">
          <button onClick={()=>{
            if(quantity!=1){
            setquantity(quantity-1);
            }
          }}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>{
            setquantity(quantity+1);
          }}>+</button>
        </div>
        <button className='cartbtn'>Add to Cart
        </button>
        <button className='buy-btn'>Buy now</button>
      </div>
    </div>
  );
}

export default ProductDetails;
