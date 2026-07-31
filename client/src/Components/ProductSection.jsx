import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import "./ProductSection.css"

const ProductSection = () => {
    const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchProducts=async()=>{
    try{
         const response=await fetch("https://fakestoreapi.com/products")
         const data=await response.json();
         setproducts(data);
    }
    catch(err){
        console.log(err);
    }
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-section">
        <h1>Featured Products</h1>
        <div className="product-grid">
          {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
}

export default ProductSection;
