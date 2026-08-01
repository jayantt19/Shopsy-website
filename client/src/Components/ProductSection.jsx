import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

const ProductSection = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(searchTerm);
  return (
    <div className="product-section">
      <h1>Featured Products</h1>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="no-product">No products found</h2>
        )}
      </div>
    </div>
  );
};

export default ProductSection;