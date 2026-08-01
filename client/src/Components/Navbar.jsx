import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Navbar.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa"; 
const Navbar = ({ searchTerm, setSearchTerm }) => {
 const { cart } = useContext(CartContext);
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <>
    <header>
      <div className='navbar'>
        <Link to='/' className='navbar-logo'>
            <h1>Shopsy</h1>
             <svg className="smile" viewBox="0 0 220 50">
        <path
            d="M20 15 Q110 45 200 15"
            stroke="#FBF040"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
        />
        <path
            d="M188 10 L205 15 L190 25"
            fill="none"
            stroke="#ff9900"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
        </Link>
        <div className='location'>
          <span className='deliever'>Deliver to</span>
            <div className='location-icon'>
<div> <FaMapMarkerAlt /></div>
<span className='update'>Mathura 281006</span>
            </div>
        </div>
        <div className='search-bar'>
         <input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search for a product..."
  className='search'
/>
          <button className='submit'><FaSearch className='search-icon' /></button> 
        </div>
        <div className='account'>
           <button className='login'>Login</button>
        </div>
        <div className='return'>My Orders</div>
        <Link  to="/cart" className='cart'>
          <div className="cart-icon">
  <FaShoppingCart />

  {cartCount > 0 && (
  <span className="cart-count">{cartCount}</span>
)}
</div>Cart
        </Link>
      </div>


      <div className="panel">
        <Link to='/grocery' className="panel-item">Grocery</Link>
        <Link to='/mobile' className="panel-item">Mobile</Link>
       <Link to='/fashion' className="panel-item">Fashion </Link>
       <Link to='/electronics' className="panel-item">Electronics</Link>
       <Link to='/travel' className="panel-item">Travels</Link>
       <Link to='/toys' className="panel-item">Toys</Link>
       <Link to='/sneaker' className="panel-item">Footwear</Link>
      </div>
      </header>
    </>
  );
}

export default Navbar;
