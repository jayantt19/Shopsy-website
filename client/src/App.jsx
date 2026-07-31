import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Wishlist from './Pages/Wishlist';
import ScrollToTop from "./Components/ScrollToTop";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Navbar />
       <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Products />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </>
  );
}

export default App;
