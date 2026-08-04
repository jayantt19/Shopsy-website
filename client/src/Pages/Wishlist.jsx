import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../Components/ProductCard";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your wishlist is empty ❤️</h2>
          <p>Start adding products you love!</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;