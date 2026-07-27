import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <header>
      <div className='navbar'>
        <div className='navbar-logo'>
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
        </div>
        <div className='location'>
          <span className='deliever'>Deliver to</span>
            <div className='location-icon'>
<div><svg xmlns="http://www.w3.org/2000/svg" className='locate' viewBox="0 0 640 640"><path fill="rgb(226, 230, 237)" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg></div>
<span className='update'>Mathura 281006</span>
            </div>
        </div>
        <div className='search-bar'>
          <input type="text" className='search' placeholder='search for a product,category or brand'/>
          <button className='submit'><svg  className='search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg></button> 
        </div>
        <div className='account'>
          <button className='login'>Login</button>
        </div>
        <div className='return'>My Orders</div>
        <div className='cart'>
          <div className='cart-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgb(226, 230, 237)" d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
          </div>Cart
        </div>
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
